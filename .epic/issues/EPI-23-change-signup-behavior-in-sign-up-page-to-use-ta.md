---
id: EPI-23
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-3]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-23 Change Signup Behavior in Sign Up Page to Use TanStack Query

Migrate `use-signup` to a `useMutation` calling the signup action.

- `mutationFn` calls the existing signup action directly
- Surface `isPending` / `error` from the mutation instead of local `useState`
