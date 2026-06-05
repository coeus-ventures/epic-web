---
id: EPI-16
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-6]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-16 Change Revoke Session Behavior in Users Page to Use TanStack Query

Migrate `use-revoke-session` to an optimistic `useMutation`.

- `onMutate` snapshots and removes the session from the sessions cache
- `onError` rolls back to the snapshot
- `onSettled` invalidates the sessions query key
