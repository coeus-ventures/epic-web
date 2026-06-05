---
id: EPI-27
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-26]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-27 Change Hooks Skill Behavior in Documentation Page to Use TanStack Query

Rewrite the `hooks` skill so generated hooks follow the migrated pattern.

- Generate hooks using `useQuery` / `useMutation`, the optimistic mutation recipe, and query-key conventions instead of Jotai atoms
- Update its test-generation section to use `QueryClientProvider`
