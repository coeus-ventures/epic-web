---
id: EPI-12
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-5]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-12 Change Set Role Behavior in Users Page to Use TanStack Query

Migrate `use-set-role` to an optimistic `useMutation`.

- `onMutate` snapshots and updates the user role in cache
- `onError` rolls back to the snapshot
- `onSettled` invalidates the users query key
