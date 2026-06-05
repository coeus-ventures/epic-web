---
id: EPI-3
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-2]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-3 Implement Get Query Client Helper Behavior in Foundation Page

Implement `getQueryClient()` so server and client share consistent query-client construction.

- Fresh `QueryClient` per request on the server, module-level singleton on the client
- Set a default `staleTime` above zero in `defaultOptions`
- Used by Server Component prefetch and the client provider
