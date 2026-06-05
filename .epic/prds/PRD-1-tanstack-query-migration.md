---
id: PRD-1
status: draft
---

# PRD-1 TanStack Query Migration

## Overview

Migrate the Presentation layer from Jotai-based, hand-rolled server-state management to **TanStack Query (v5)**. Today every behavior hook manually hydrates a Jotai atom with server data and performs a six-step optimistic-update dance (validate → optimistic insert → call action → replace → rollback → reset flags). This logic is duplicated across all 21 behaviors and is error-prone.

After this migration, TanStack Query owns all **server state** (reads, writes, cache, invalidation, retries, loading/error flags). **Jotai is retained for pure UI state only** (modals, selections, form drafts). Server Actions remain the single backend entry point — they become the `queryFn`/`mutationFn` directly, preserving the Action-first rule. Routes are reserved for streaming/webhooks.

This is an architecture change, not a product feature. The deliverable is: the same app behavior, re-implemented on TanStack Query, plus updated architecture documentation and layer skills so all future code follows the new pattern.

### Decisions (locked)

- **Jotai coexists** — server state moves to TanStack Query; Jotai stays for UI state.
- **Action-first** — `queryFn`/`mutationFn` call the existing `.action.ts` directly. Routes only for streaming/webhooks.
- **Reads** use server prefetch + `HydrationBoundary` + `dehydrate`, via a `getQueryClient()` helper (new `QueryClient` per request on the server, module singleton on the client) and a default `staleTime > 0`. Server Components are prefetch-only — no `fetchQuery`/server-rendered query results.
- **Mutations** are optimistic by default: `onMutate` snapshots + applies, `onError` rolls back, `onSettled` invalidates the affected query keys.
- **Full migration** — all 21 existing behaviors, plus `docs/references/architecture.md` and the `hooks` / `components` skills.

### Architectural impact

- A new behavior-folder convention: a `[name].query.ts` options file (shared `queryKey` + `queryFn`) sits alongside each read behavior so the Server Component prefetch and the client `useQuery` agree on key and function.
- The "thin client, fat server" doctrine is **consciously relaxed**: the client now owns cache invalidation, optimistic state, and retry policy. The architecture doc must state this explicitly and update the "client must not handle retries / error recovery" rule.
- Server Actions, Routes, and Models are **unchanged** — this migration touches only the Presentation layer plus the global provider wiring.

## Foundation

Global wiring that must exist before any behavior hook can work. Not a user-facing page; the substrate for everything below.

### Behaviors

- **install-tanstack-query**: Add `@tanstack/react-query` (and devtools) via Bun and remove server-state usage of Jotai where it is fully replaced.
- **query-client-provider**: Add a root client `Providers` component wrapping the app in `QueryClientProvider`, mounted in the root layout.
- **get-query-client-helper**: Implement `getQueryClient()` — a fresh `QueryClient` per request on the server, a module-level singleton on the client — with a default `staleTime` above zero in `defaultOptions`.
- **devtools-setup**: Mount React Query Devtools in development only.

## Auth — Sign Up

The public signup page. A single create-account mutation.

### Behaviors

- **signup**: Migrate `use-signup` to a `useMutation` calling the signup action; surface `isPending`/`error` from the mutation instead of local `useState`.

## Auth — Sign In

The public signin page. A single authenticate mutation.

### Behaviors

- **signin**: Migrate `use-signin` to a `useMutation` calling the signin action, with mutation-driven loading/error state.

## Playground

The landing-page playground demo behavior. Serves as the canonical minimal example for the migrated pattern.

### Behaviors

- **hello-world**: Migrate `use-hello` to the TanStack Query pattern as the simplest reference implementation (read via `useQuery` or mutation via `useMutation`, matching its current shape).

## Admin — Database Tables

Admin page listing all database tables. A read.

### Behaviors

- **list-tables** *(read)*: Migrate `use-list-tables` to `useQuery` with a `list-tables.query.ts` options file; prefetch on the server and hydrate.

## Admin — Database Rows

Admin page for viewing and editing rows of a selected table. One read plus three mutations that invalidate it.

### Behaviors

- **view-table** *(read)*: Migrate `use-table-data` to `useQuery` with a `view-table.query.ts` options file keyed by table name; server-prefetch + hydrate.
- **add-row** *(mutation)*: Migrate `use-add-row` to an optimistic `useMutation` that snapshots, inserts optimistically, rolls back on error, and invalidates the table query on settle.
- **edit-row** *(mutation)*: Migrate `use-edit-row` to an optimistic `useMutation` updating the row in cache and invalidating on settle.
- **delete-row** *(mutation)*: Migrate `use-delete-row` to an optimistic `useMutation` removing the row from cache and invalidating on settle.

## Admin — Users

Admin user-management page. The heaviest area: two reads and eleven mutations, all sharing the users/sessions query keys.

### Behaviors

- **list-users** *(read)*: Migrate `use-list-users` to `useQuery` with a `list-users.query.ts` options file; server-prefetch + hydrate.
- **list-sessions** *(read)*: Migrate `use-list-sessions` to `useQuery` with a `list-sessions.query.ts` options file; prefetch where the sessions dialog is server-rendered, otherwise client-fetch on open.
- **create-user** *(mutation)*: Optimistic `useMutation`; insert into the users list, rollback on error, invalidate on settle.
- **update-user** *(mutation)*: Optimistic `useMutation`; patch the user in cache, invalidate on settle.
- **delete-user** *(mutation)*: Optimistic `useMutation`; remove the user from cache, invalidate on settle.
- **ban-user** *(mutation)*: Optimistic `useMutation`; flip ban status in cache, invalidate on settle.
- **unban-user** *(mutation)*: Optimistic `useMutation`; flip ban status in cache, invalidate on settle.
- **set-role** *(mutation)*: Optimistic `useMutation`; update role in cache, invalidate on settle.
- **set-password** *(mutation)*: `useMutation` (no list cache to update); surface mutation loading/error.
- **impersonate-user** *(mutation)*: `useMutation` triggering impersonation; invalidate session/user queries on settle.
- **stop-impersonating** *(mutation)*: `useMutation` ending impersonation; invalidate session/user queries on settle.
- **revoke-session** *(mutation)*: Optimistic `useMutation`; remove the session from the sessions cache, invalidate on settle.
- **revoke-all-sessions** *(mutation)*: Optimistic `useMutation`; clear sessions in cache, invalidate on settle.

## Documentation & Conventions

The architecture-of-record and the skills that generate future code. These must match the migrated codebase.

### Behaviors

- **update-architecture-doc**: Rewrite the Presentation-layer section of `docs/references/architecture.md` for TanStack Query — server/UI state split, the `[name].query.ts` convention, the prefetch + hydrate read pattern, the optimistic mutation pattern, and the explicit relaxation of the "thin client" no-retries/no-cache rule.
- **update-hooks-skill**: Rewrite the `hooks` skill so generated hooks use `useQuery`/`useMutation`, the optimistic mutation recipe, and query-key conventions instead of Jotai atoms; update its test-generation section to use `QueryClientProvider`.
- **update-components-skill**: Update the `components` skill for the prefetch + `HydrationBoundary` Server Component pattern and consuming client hooks.
- **update-claude-md**: Update `.claude/CLAUDE.md` architecture table so the Frontend layer lists TanStack Query for server state and Jotai for UI state.

## Flows

### Foundation First
Stand up the query infrastructure before touching any behavior.

1. install tanstack-query -- Foundation install-tanstack-query
2. add query-client-provider -- Foundation query-client-provider
3. implement get-query-client-helper -- Foundation get-query-client-helper
4. mount devtools-setup -- Foundation devtools-setup

### Reads Before Mutations
Each read defines the query key and options file that its sibling mutations invalidate, so reads must land first.

1. migrate list-users -- Admin — Users list-users
2. migrate list-sessions -- Admin — Users list-sessions
3. migrate create-user -- Admin — Users create-user
4. migrate update-user -- Admin — Users update-user
5. migrate ban-user -- Admin — Users ban-user
6. migrate revoke-session -- Admin — Users revoke-session

### Database Area Migration
Migrate the table read, then the row mutations that depend on its query key.

1. migrate list-tables -- Admin — Database Tables list-tables
2. migrate view-table -- Admin — Database Rows view-table
3. migrate add-row -- Admin — Database Rows add-row
4. migrate edit-row -- Admin — Database Rows edit-row
5. migrate delete-row -- Admin — Database Rows delete-row

### Auth Migration
Convert the standalone auth mutations once the provider exists.

1. migrate signup -- Auth — Sign Up signup
2. migrate signin -- Auth — Sign In signin

### Docs Track The Code
Once the pattern is proven on a real area, lock it into the architecture-of-record and skills so future behaviors follow it.

1. update architecture-doc -- Documentation & Conventions update-architecture-doc
2. update hooks-skill -- Documentation & Conventions update-hooks-skill
3. update components-skill -- Documentation & Conventions update-components-skill
4. update claude-md -- Documentation & Conventions update-claude-md
