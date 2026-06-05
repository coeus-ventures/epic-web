---
id: EPI-1
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: []
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-1 Implement Install Tanstack Query Behavior in Foundation Page

Add TanStack Query to the project as the foundation for server-state management.

- Add `@tanstack/react-query` and `@tanstack/react-query-devtools` via Bun
- Remove server-state usage of Jotai where it is fully replaced by TanStack Query
- Leave Jotai in place for pure UI state (modals, selections, form drafts)
