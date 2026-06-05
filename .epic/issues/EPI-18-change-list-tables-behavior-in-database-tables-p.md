---
id: EPI-18
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-3]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-18 Change List Tables Behavior in Database Tables Page to Use TanStack Query

Migrate `use-list-tables` to `useQuery` with server prefetch and hydration.

- Add a `list-tables.query.ts` options file sharing `queryKey` + `queryFn`
- Prefetch on the server and hydrate via `HydrationBoundary` + `dehydrate`
