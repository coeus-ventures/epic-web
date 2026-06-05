---
id: EPI-19
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-18]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-19 Change View Table Behavior in Database Rows Page to Use TanStack Query

Migrate `use-table-data` to `useQuery` keyed by table name.

- Add a `view-table.query.ts` options file with a `queryKey` keyed by table name
- Server-prefetch and hydrate via `HydrationBoundary` + `dehydrate`
- Defines the table query key that the row mutations invalidate
