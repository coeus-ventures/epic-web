---
id: EPI-5
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-3]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-5 Change List Users Behavior in Users Page to Use TanStack Query

Migrate `use-list-users` to `useQuery` with server prefetch and hydration.

- Add a `list-users.query.ts` options file sharing `queryKey` + `queryFn`
- Prefetch on the server and hydrate via `HydrationBoundary` + `dehydrate`
- Defines the users query key that sibling user mutations invalidate
