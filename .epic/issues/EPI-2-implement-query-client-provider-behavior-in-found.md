---
id: EPI-2
github_id: null
status: open
assignee: null
state: Queued
type: item
depends_on: [EPI-1]
prd_id: PRD-1
created_at: 2026-06-05T22:10:43.000Z
---

# EPI-2 Implement Query Client Provider Behavior in Foundation Page

Add a root client `Providers` component that wraps the app in `QueryClientProvider`.

- Create a client `Providers` component using `QueryClientProvider`
- Mount it in the root layout so the whole app has access to the query client
