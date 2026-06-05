---
id: EPI-6
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-3]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-6 Change List Sessions Behavior in Users Page to Use TanStack Query

Migrate `use-list-sessions` to `useQuery` with a shared options file.

- Add a `list-sessions.query.ts` options file sharing `queryKey` + `queryFn`
- Prefetch where the sessions dialog is server-rendered, otherwise client-fetch on open
- Defines the sessions query key that session mutations invalidate
