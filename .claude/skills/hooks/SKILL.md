---
name: hooks
description: Write React hooks following the Epic architecture patterns. Use when creating custom hooks for state management, server action calls, optimistic updates, and validation. Triggers on "create a hook", "add a hook", or "write a hook for".
---

# Hooks

## Overview

This skill creates React hooks that follow the Epic three-layer architecture. Hooks belong to the **Frontend layer**. Server state is owned by **TanStack Query** (`useQuery`/`useMutation`); **Jotai is retained for UI state only** (dialogs, selections, filter/sort/page inputs).

## Architecture Context

```
Frontend (Browser): Components -> Hooks -> TanStack Query cache (server state)
                          |                 Jotai atoms (UI state only)
                          v
Backend (Server): Actions (atomic) OR Routes (streaming)
```

Hooks:
- Run in the browser (Frontend layer)
- Read server state with `useQuery`; write it with `useMutation`
- Use Jotai atoms ONLY for UI state — never for server data
- Validate inputs with Zod
- Call ONE backend entry point (Action or Route, never both) as the `queryFn`/`mutationFn`
- Handle optimistic updates and rollback through the query cache
- NEVER access database or import server-only code

### Read vs Write

- **Read** → `useQuery` with a `[name].query.ts` options file (shared `queryKey` + `queryFn`). The page Server Component prefetches it and hydrates via `HydrationBoundary`.
- **Write** → `useMutation`, optimistic by default (`onMutate` snapshot, `onError` rollback, `onSettled` invalidate). Mutations with no list representation are plain mutations.

### Backend Entry Point Rule

Each hook calls exactly ONE backend entry point:

**Action** (default):
- Import and call directly
- Most behaviors
- Simpler mental model

**Route**:
- Call via `fetch` or `fetchEventSource`
- Streaming/SSE, webhooks, HTTP semantics needed
- Supports both request/response and streaming

Never call both. Never call multiple endpoints.

## Hook Location and Naming

```
app/[role]/[page]/behaviors/[behavior-name]/
  hooks/
    use-[behavior-name].ts    # Hook file
  actions/
    [action-name].action.ts   # Server action it calls
```

- File names start with `use-` and match the exported function
- Behavior folders use kebab-case

## Hook Specification Format

Follow the Epic Hook specification format:

```markdown
## useHookName(params?: ParamType)

[Short description of what stateful logic this hook encapsulates]

### Parameters
- paramName: Type - description

### State
- stateName: Type
- anotherState: Type

### Returns
- value: Type - description
- action: () => void - description

### Dependencies
- useOtherHook - why it's needed
```

## Implementation Pattern

### Query options file (`[name].query.ts`)

```typescript
import { queryOptions } from '@tanstack/react-query';
import { listItems } from './actions/list-items.action';

export const itemsKeys = {
  all: ['items'] as const,
  lists: () => [...itemsKeys.all, 'list'] as const,
  list: (params: ListParams) => [...itemsKeys.lists(), params] as const,
};

export function listItemsQuery(params: ListParams) {
  return queryOptions({
    queryKey: itemsKeys.list(params),
    queryFn: async () => {
      const result = await listItems(params);   // the Action
      if (result.error) throw new Error(result.error);
      return result.data;
    },
  });
}
```

### Read hook (`useQuery`)

```typescript
'use client';
import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { listItemsQuery } from './list-items.query';
import { pageAtom, searchAtom } from '@/app/[role]/[page]/state'; // UI state

export function useListItems() {
  // UI-state atoms feed the query key.
  const page = useAtomValue(pageAtom);
  const search = useAtomValue(searchAtom);

  const query = useQuery(listItemsQuery({ page, search }));

  return {
    items: query.data?.items ?? [],
    isLoading: query.isPending,
    error: query.error ? (query.error as Error).message : null,
  };
}
```

The page Server Component prefetches and hydrates:

```tsx
// page.tsx (Server Component)
const queryClient = getQueryClient();
await queryClient.prefetchQuery(listItemsQuery(defaultParams));
return (
  <HydrationBoundary state={dehydrate(queryClient)}>
    <PageContent />
  </HydrationBoundary>
);
```

### On-demand and paginated reads

```typescript
// On-demand read (e.g. a dialog): fetch only when opened.
export function useItemSessions(id: string | undefined, open: boolean) {
  const query = useQuery({ ...sessionsQuery(id ?? ''), enabled: open && !!id });
  // Use query.isLoading (isPending && isFetching), NOT isPending — a disabled
  // query is "pending" forever, but isLoading stays false until it actually runs.
  return {
    sessions: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error ? (query.error as Error).message : null,
  };
}

// Paginated read: keepPreviousData so rows don't blank while the next page loads.
const query = useQuery({
  ...listItemsQuery(params),
  placeholderData: keepPreviousData,
});
```

### Mutation hook (`useMutation`, optimistic)

Preserve a `{ handleX, isLoading, error }` shape so components stay untouched.
**Validate once** at the call site, then pass already-parsed data to the
mutation — `mutationFn` and `onMutate` both receive the typed value (no double
`safeParse`).

```typescript
'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';
import { createItem } from './actions/create-item.action';
import { itemsKeys, type ItemsListData } from '../list-items/list-items.query';

const InputSchema = z.object({ name: z.string().min(1).max(100) });
type CreateItemInput = z.infer<typeof InputSchema>;

export function useCreateItem() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: CreateItemInput) => {
      const result = await createItem(data);
      if (result.error) throw new Error(result.error);
      return result.data;
    },
    onMutate: async (data: CreateItemInput) => {
      await queryClient.cancelQueries({ queryKey: itemsKeys.lists() });
      // Snapshot EVERY cached list variation (pages/filters); restore all on error.
      const previous = queryClient.getQueriesData<ItemsListData>({
        queryKey: itemsKeys.lists(),
      });
      // setQueriesData patches the whole family via the lists() prefix. For a
      // single record use setQueryData(itemsKeys.detail(id), ...).
      queryClient.setQueriesData<ItemsListData>(
        { queryKey: itemsKeys.lists() },
        (old) =>
          old
            ? { ...old, items: [{ ...data, id: `temp-${Date.now()}`, pending: true }, ...old.items] }
            : old
      );
      return { previous };
    },
    onError: (_err, _data, ctx) =>
      ctx?.previous?.forEach(([key, data]) => queryClient.setQueryData(key, data)),
    onSettled: () => queryClient.invalidateQueries({ queryKey: itemsKeys.all }),
  });

  // Validate ONCE; throw so the caller's `await` rejects and the dialog toasts.
  const handleCreateItem = (raw: unknown) => {
    const parsed = InputSchema.safeParse(raw);
    if (!parsed.success) {
      return Promise.reject(
        new Error(parsed.error.issues.map((e) => e.message).join(', '))
      );
    }
    return mutation.mutateAsync(parsed.data);
  };

  return {
    handleCreateItem,
    isLoading: mutation.isPending,
    error: mutation.error ? mutation.error.message : null,
  };
}
```

Mutations with no list representation (e.g. set-password, redirect-on-success) are plain mutations — no `onMutate`/`onError` cache work.

## Hard-won practice notes

Lessons that prevent real, hard-to-spot bugs:

- **Preserve the hook's public return shape.** When migrating or refactoring, keep `{ handleX, isLoading, error }` byte-for-byte identical so consuming components need zero changes. This is the difference between touching one file and touching twenty.
- **Prefetch params must equal the client's first render.** Export a `defaultParams` from `[name].query.ts`; use it for BOTH the server `prefetchQuery` and the param atoms' initial values. If they differ, hydration **silently misses** — no error, just a refetch and a loading flash. The key hash drops `undefined` fields but keeps `''`, so match exactly.
- **`isPending` vs `isLoading`.** Always-enabled reads → `isPending`. `enabled`-gated reads → `isLoading` (a disabled query is "pending" forever).
- **Refresh = invalidate, not refetch.** `queryClient.invalidateQueries({ queryKey })` is stable and refetches the whole family; `query.refetch()` captured in a `useCallback` dep is unstable (the query object is new each render).
- **Validate once, at the call site.** Throw from the handler before `mutateAsync`; the component's `await … catch` surfaces it. The hook's `error` field then reflects only server/mutation errors — fine, because dialogs catch the rejection.
- **`[name].query.ts` has NO `'use client'`.** It's imported by both the Server Component (prefetch) and the client hook, so keep it directive-free. Mutations import its key factory (`itemsKeys`) to invalidate/patch.
- **Page split.** A page that renders a read is a Server Component (prefetch + `HydrationBoundary`) wrapping a `*-content.tsx` client component that holds dialog/UI state. A page with `useState`/dialogs can't itself be a Server Component.
- **UI-state atoms shared across dynamic routes** (e.g. a global `sort` atom reused for `/table/[name]`) can desync from the per-route prefetch default — scope them per route or accept the extra client refetch.

## Route Consumption Patterns

### Non-Streaming Route

```typescript
import { useAtom } from 'jotai';
import { useState } from 'react';

export function useRouteBehavior() {
  const [result, setResult] = useAtom(resultAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (input: Input) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/page/behaviors/behavior-name`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Request failed');
    } finally {
      setIsLoading(false);
    }
  };

  return { result, isLoading, error, handleSubmit };
}
```

### Streaming Route (SSE)

```typescript
import { fetchEventSource } from '@microsoft/fetch-event-source';
import { useAtom } from 'jotai';
import { useState, useRef } from 'react';

export function useStreamingBehavior() {
  const [result, setResult] = useAtom(resultAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleGenerate = async (input: Input) => {
    setIsLoading(true);
    setError(null);
    setResult('');

    abortControllerRef.current = new AbortController();

    await fetchEventSource(`/page/behaviors/behavior-name`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
      signal: abortControllerRef.current.signal,

      onmessage(event) {
        switch (event.event) {
          case 'token':
            setResult(prev => prev + event.data);
            break;
          case 'complete':
            setIsLoading(false);
            break;
          case 'error':
            setError(event.data);
            setIsLoading(false);
            break;
        }
      },

      onclose() {
        setIsLoading(false);
      },

      onerror(err) {
        setError('Connection failed');
        setIsLoading(false);
      },
    });
  };

  const handleCancel = () => {
    abortControllerRef.current?.abort();
    setIsLoading(false);
  };

  return { result, isLoading, error, handleGenerate, handleCancel };
}
```

### Key Differences

| Aspect | Action | Route | Streaming Route |
|--------|--------|-------|-----------------|
| Import | Action function | `fetch` | `fetchEventSource` |
| Call | `await action(input)` | `await fetch(url)` | `await fetchEventSource(url)` |
| Response | Single result | Single result | Multiple events |
| Cancellation | Not supported | Not typical | Via `AbortController` |

---

## Key Patterns

### 1. Validation First (once, at the call site)
- `safeParse` in the handler before `mutateAsync`; reject with a friendly message on failure
- Pass the parsed value into the mutation so `mutationFn`/`onMutate` get typed data — don't re-parse in each
- Components surface validation failures via the rejected promise (`await … catch`)

### 2. Optimistic Updates (via the query cache)
- `onMutate`: cancel in-flight queries, snapshot with `getQueriesData`, apply the optimistic change with `setQueriesData` (temp id, `pending: true`)
- `onError`: restore the snapshot
- `onSettled`: `invalidateQueries` to reconcile with the server

### 3. Error Handling
- Surface `mutation.error` / `query.error` as a string; `isPending`/`isLoading` for loading
- Throw inside `mutationFn` on `result.error` so `mutateAsync` rejects and components can `try/catch`
- Validation errors reject from the handler (before the mutation), so they reach the same `catch`
- Provide descriptive error messages

### 4. State Management
- Server state lives in the TanStack Query cache — never in Jotai
- Use Jotai atoms (from `state.ts`) ONLY for UI state; filter/sort/page atoms feed query keys
- Return a consistent shape: reads `{ data, isLoading, error }`; mutations `{ handleX, isLoading, error }`

### 5. Server Action Calls
- Actions are the `queryFn`/`mutationFn` (import from `./actions/[name].action`)
- Throw on `result.error` so the query/mutation enters its error state
- Never call actions directly from components

## Constraints

- NEVER import database clients or models
- NEVER store server state in Jotai — use the query cache
- NEVER call more than one backend entry point (action or route)
- NEVER put business logic in hooks - that belongs in actions/routes
- ALWAYS include both loading and error states (`isPending`/`isLoading` + `error`)
- ALWAYS validate input with Zod once at the call site, before `mutateAsync`
- ALWAYS preserve the hook's public return shape when refactoring (keep components untouched)
- ALWAYS make list mutations optimistic (`onMutate`/`onError`/`onSettled`); plain mutations otherwise
- ALWAYS support cancellation for streaming behaviors (routes)

## Example Specification

```markdown
## useCreateProject()

Entry point for the Create Project behavior. Validates input, performs optimistic updates, and calls the server action.

### State
- isLoading: boolean
- error: string | null

### Returns
- handleCreateProject: (input: unknown) => Promise<Project> - validates, then triggers the behavior
- isLoading: boolean - submission in progress
- error: string | null - current error message

### Dependencies
- useQueryClient() - for optimistic cache updates
- projectsKeys - query-key factory from projects.query.ts (invalidate/patch)

### Example: Create project successfully

#### PreState
query [projects, list]: []
isLoading: false
error: null

#### Steps
* Call: handleCreateProject("New Project")
* Returns: the created project

#### PostState
query [projects, list]: [{ id: "1", name: "New Project", status: "draft", pending: false }]
isLoading: false
error: null

### Example: Reject empty name

#### PreState
query [projects, list]: []
isLoading: false
error: null

#### Steps
* Call: handleCreateProject("")
* Rejects: "Name is required"

#### PostState
query [projects, list]: []   # rolled back
isLoading: false
error: null                  # validation error surfaced via the rejected promise
```

## Test Generation

Generate test files at `[behavior-path]/tests/use-[behavior-name].test.tsx`.

### Test Structure

Wrap the hook in a `QueryClientProvider` with retries disabled. Use a fresh
`QueryClient` per test so cache state never leaks between tests.

```typescript
import { describe, it, expect } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';
import { useCreateItem } from '../use-create-item';

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>{children}</JotaiProvider>
    </QueryClientProvider>
  );
}

describe('useCreateItem', () => {
  it('creates an item', async () => {
    const { result } = renderHook(() => useCreateItem(), { wrapper: createWrapper() });

    await act(async () => {
      await result.current.handleCreateItem({ name: 'New Item' });
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.error).toBeNull();
  });
});
```

### Translation Rules

| Spec | Test |
|------|------|
| PreState | Seed the cache with `queryClient.setQueryData(...)` if needed |
| `Call:` | `await result.current.handleX(...)` |
| `Returns:` | Verify the promise resolves / cache updated |
| `Throws:` | `await expect(result.current.handleX(...)).rejects` or assert `result.current.error` |
| PostState | Assert returned `data`/`error`, or read `queryClient.getQueryData(...)` |

### Principles

- Fresh `QueryClient` per test; `retry: false`
- Test state transitions and cache effects, not the database
- Mock server actions if needed (hooks don't touch DB directly)
- Start with ONE test (happy path)
