---
id: EPI-7
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-5]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-7 Change Create User Behavior in Users Page to Use TanStack Query

Migrate `use-create-user` to an optimistic `useMutation`.

- `onMutate` snapshots and optimistically inserts the new user into the users list
- `onError` rolls back to the snapshot
- `onSettled` invalidates the users query key
