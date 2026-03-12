# State Management Reference

> Server state via TanStack Query. Transient state via Jotai. Two systems, clear boundaries.

## Overview

State is split into two systems based on what it represents:

| System | Purpose | Persists across navigation? |
|--------|---------|----------------------------|
| **TanStack Query** | Server state -- data that lives in the database | Yes (cached) |
| **Jotai** | Transient state -- behavior events and UI-only state | No (resets on navigation) |

**TanStack Query** is the source of truth for *what the data is*.
**Jotai behavior atoms** are the source of truth for *what happened* (trigger history, per-entity status).
**Jotai UI atoms** are the source of truth for *how it looks* (presentation-only state).

---

## TanStack Query -- Server State

TanStack Query owns all server-synchronized state. This replaces the previous `ModelAtom` and `ListAtom` Jotai patterns.

### Setup

A shared `QueryClient` is created per request on the server and as a singleton on the browser:

```typescript
// app/get-query-client.ts
import {
  isServer,
  QueryClient,
  defaultShouldDehydrateQuery,
} from '@tanstack/react-query'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === 'pending',
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

export function getQueryClient() {
  if (isServer) {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}
```

The root layout wraps the app with `QueryClientProvider`:

```typescript
// app/providers.tsx
'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { getQueryClient } from './get-query-client'

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
```

### Prefetching in Server Components

Server Components prefetch data and pass it to client components via `HydrationBoundary`. Do not `await` the prefetch -- this enables streaming:

```typescript
// app/posts/page.tsx (Server Component)
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getQueryClient } from '@/app/get-query-client'
import { Posts } from './components/Posts'

export default function PostsPage() {
  const queryClient = getQueryClient()

  queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
    </HydrationBoundary>
  )
}
```

### Reads with `useSuspenseQuery`

Client components consume prefetched data with `useSuspenseQuery`. The data is already available from the server -- no loading state needed:

```typescript
// app/posts/components/Posts.tsx
'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

export function Posts() {
  const { data: posts } = useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  return posts.map(post => <Post key={post.id} post={post} />)
}
```

### Writes with `useMutation` and Optimistic Updates

Mutations call server actions and optimistically update the query cache. On error, the cache rolls back to the snapshot. On settle, queries are invalidated to refetch true server state:

```typescript
// app/posts/behaviors/create-post/use-create-post.ts
'use client'

import { useMutation } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'
import { createPostAtom } from './state'
import { createPostAction } from './create-post.action'
import { updateEvents } from '@/shared/utils/behavior-event'

export function useCreatePost() {
  const setEvents = useSetAtom(createPostAtom)
  const pushEvent = (partial) => setEvents(prev => updateEvents(prev, partial))

  const mutation = useMutation({
    mutationFn: createPostAction,

    onMutate: async (newPost, context) => {
      const eventId = crypto.randomUUID()

      // Track the behavior event
      pushEvent({
        id: eventId,
        key: newPost.tempId,
        status: 'pending',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      })

      // Optimistic update
      await context.client.cancelQueries({ queryKey: ['posts'] })
      const previous = context.client.getQueryData(['posts'])
      context.client.setQueryData(['posts'], (old) => [
        ...(old ?? []),
        { ...newPost, id: newPost.tempId },
      ])

      return { previous, eventId }
    },

    onError: (err, newPost, result, context) => {
      context.client.setQueryData(['posts'], result.previous)
      pushEvent({ id: result.eventId, status: 'error', error: err.message, updatedAt: Date.now() })
    },

    onSuccess: (data, variables, result) => {
      pushEvent({ id: result.eventId, status: 'success', updatedAt: Date.now() })
    },

    onSettled: (data, error, variables, result, context) => {
      context.client.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  return mutation
}
```

### Query Key Conventions

Query keys follow a hierarchical structure:

| Pattern | Example | Use |
|---------|---------|-----|
| `[entity]` | `['posts']` | List of entities |
| `[entity, id]` | `['posts', postId]` | Single entity |
| `[entity, id, relation]` | `['posts', postId, 'comments']` | Nested relation |

### Query Options Pattern

Define query options as reusable objects in `queries.ts` files:

```typescript
// app/posts/behaviors/list-posts/queries.ts
import { queryOptions } from '@tanstack/react-query'
import { listPostsAction } from './list-posts.action'

export const postsQueryOptions = queryOptions({
  queryKey: ['posts'],
  queryFn: listPostsAction,
})

// Use in server component: queryClient.prefetchQuery(postsQueryOptions)
// Use in client component: useSuspenseQuery(postsQueryOptions)
```

---

## Jotai -- Transient State

Jotai manages two kinds of state that do not belong in the server cache:

1. **Behavior event atoms** -- track the history of behavior triggers within a page session
2. **UI atoms** -- client-only presentation state (selected tab, open modal, etc.)

Both reset on navigation since they are transient by nature.

### Behavior Event Atoms

Each mutation behavior owns a Jotai atom that holds an array of events. Events track when the behavior was triggered, what entity it targeted, and whether it succeeded or failed.

**Event shape:**

```typescript
// shared/types/behavior-event.ts
type BehaviorEvent = {
  id: string          // unique event id
  key?: string        // optional entity reference (e.g., post ID, message ID)
  status: 'pending' | 'success' | 'error'
  createdAt: number   // when triggered
  updatedAt: number   // when settled
  error?: string
  data?: unknown
}
```

**Atom definition:**

```typescript
// app/posts/behaviors/create-post/state.ts
import { atom } from 'jotai'
import { BehaviorEvent } from '@/shared/types/behavior-event'

export const createPostAtom = atom<BehaviorEvent[]>([])
```

**Writing events** -- the atom updates existing events in-place by `id`, or appends new ones:

```typescript
// shared/utils/behavior-event.ts
import { BehaviorEvent } from '@/shared/types/behavior-event'

export function updateEvents(
  events: BehaviorEvent[],
  partial: Partial<BehaviorEvent> & { id: string },
): BehaviorEvent[] {
  const index = events.findIndex(e => e.id === partial.id)
  if (index === -1) {
    return [...events, partial as BehaviorEvent]
  }
  const updated = [...events]
  updated[index] = { ...updated[index], ...partial }
  return updated
}
```

The hook wraps this in a convenience setter:

```typescript
const setEvents = useSetAtom(createPostAtom)
const pushEvent = (partial: Partial<BehaviorEvent> & { id: string }) =>
  setEvents(prev => updateEvents(prev, partial))
```

**Reading events** -- components can query the event array for specific entities:

```typescript
const events = useAtomValue(createPostAtom)

// Is a specific entity pending?
const isPending = events.some(e => e.key === postId && e.status === 'pending')

// Did a specific action fail?
const error = events.find(e => e.key === postId && e.status === 'error')?.error

// How many posts were created this session?
const createdCount = events.filter(e => e.status === 'success').length
```

**Rules:**

1. **One atom per mutation behavior** -- Each behavior that writes data gets one event array atom.
2. **Update in-place** -- When a behavior settles, update the existing event's `status` and `updatedAt`. Do not append a new event for the same operation.
3. **No cleanup needed** -- Events accumulate for the page session and reset on navigation. The array is naturally bounded.
4. **Key for entity correlation** -- Use the `key` field to associate events with specific entities. This enables per-item pending/error states in lists.
5. **Read behaviors skip this pattern** -- Behaviors that only load data use TanStack Query's built-in loading/error states.

### UI Atoms

UI atoms represent client-only presentation state that has no server equivalent:

```typescript
// app/posts/shared/state.ts
import { atom } from 'jotai'

export const selectedTabUIAtom = atom<'posts' | 'drafts'>('posts')
export const filterTextUIAtom = atom('')
```

**Naming convention**: Always suffix with `UIAtom`.

---

## Atom Naming Summary

| Suffix | System | Purpose | Example |
|--------|--------|---------|---------|
| `[verbNoun]Atom` | Jotai | Behavior event history | `createPostAtom`, `sendMessageAtom` |
| `[name]UIAtom` | Jotai | Client-only presentation state | `selectedTabUIAtom`, `filterTextUIAtom` |

Server state (previously `ModelAtom`, `ListAtom`) is now managed entirely by TanStack Query via query keys.

---

## How the Two Systems Work Together

A mutation behavior uses both systems in a single flow:

```
User triggers action
  |
  +--> Jotai: push event { status: 'pending' }
  |
  +--> TanStack: onMutate optimistically updates query cache
  |
  +--> Server Action executes
  |
  +--> On success:
  |      Jotai: update event { status: 'success' }
  |      TanStack: invalidateQueries (refetch true state)
  |
  +--> On error:
         Jotai: update event { status: 'error', error }
         TanStack: rollback cache to snapshot
```

---

## File Locations

| File | Location | Purpose |
|------|----------|---------|
| `queries.ts` | `app/[page]/behaviors/[name]/` | Query options for the behavior |
| `state.ts` | `app/[page]/behaviors/[name]/` | Behavior event atom |
| `state.ts` | `app/[page]/shared/` | Shared UI atoms for the page |
| `queries.ts` | `app/[page]/shared/` | Shared query options for the page |

---

## No Derived Flag Atoms

Components check operation status by reading the behavior event array directly. Do not create intermediate derived atoms like `isActiveAtom` or `isStreamingAtom`. If a component needs to know "is something active?", it checks the relevant behavior atom's events.

---

## Hydration

TanStack Query handles server state hydration automatically via `HydrationBoundary` and `dehydrate`.

For behavior atoms, if the page needs to reflect in-progress operations (e.g., a running workflow), hydrate the behavior atom with an initial event:

```typescript
const createPostAtom = atom<BehaviorEvent[]>([])

// In the hook, hydrate from server state if needed
useHydrateAtoms([[createPostAtom, initialEvents]])
```
