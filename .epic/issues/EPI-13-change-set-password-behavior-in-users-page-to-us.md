---
id: EPI-13
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-5]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-13 Change Set Password Behavior in Users Page to Use TanStack Query

Migrate `use-set-password` to `useMutation`.

- No list cache to update — call the set-password action via `mutationFn`
- Surface `isPending` / `error` from the mutation instead of local state
