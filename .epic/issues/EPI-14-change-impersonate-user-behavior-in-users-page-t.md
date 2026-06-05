---
id: EPI-14
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-5, EPI-6]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-14 Change Impersonate User Behavior in Users Page to Use TanStack Query

Migrate `use-impersonate-user` to `useMutation`.

- `mutationFn` triggers impersonation via the existing action
- `onSettled` invalidates the session and user query keys
