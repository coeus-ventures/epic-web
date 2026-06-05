---
id: EPI-24
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-23]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-24 Change Signin Behavior in Sign In Page to Use TanStack Query

Migrate `use-signin` to a `useMutation` calling the signin action.

- `mutationFn` calls the existing signin action directly
- Mutation-driven loading / error state replaces local `useState`
