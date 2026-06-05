---
id: EPI-20
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-19]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-20 Change Add Row Behavior in Database Rows Page to Use TanStack Query

Migrate `use-add-row` to an optimistic `useMutation`.

- `onMutate` snapshots and inserts the new row optimistically
- `onError` rolls back to the snapshot
- `onSettled` invalidates the table query key
