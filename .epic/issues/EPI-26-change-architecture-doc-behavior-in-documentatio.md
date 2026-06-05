---
id: EPI-26
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-5, EPI-19, EPI-20, EPI-21, EPI-22, EPI-23, EPI-25]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-26 Change Architecture Doc Behavior in Documentation Page to Reflect TanStack Query

Rewrite the Presentation-layer section of `docs/references/architecture.md`.

- Document the server-state (TanStack Query) vs. UI-state (Jotai) split
- Document the `[name].query.ts` convention and the prefetch + hydrate read pattern
- Document the optimistic mutation pattern (`onMutate` / `onError` / `onSettled`)
- State the explicit relaxation of the "thin client" no-retries / no-cache rule
