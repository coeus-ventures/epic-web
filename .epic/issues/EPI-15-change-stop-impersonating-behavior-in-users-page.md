---
id: EPI-15
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-5, EPI-6]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-15 Change Stop Impersonating Behavior in Users Page to Use TanStack Query

Migrate `use-stop-impersonating` to `useMutation`.

- `mutationFn` ends impersonation via the existing action
- `onSettled` invalidates the session and user query keys
