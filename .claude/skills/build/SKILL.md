---
name: build
description: Complete a single issue by planning then implementing it. Use when the user wants to build out one issue end-to-end. Triggers on "build this issue", "run this issue", or "complete this issue".
---

# Build

Given the issue file the user provides (e.g. `.epic/issues/[issue-file].md`), complete it.

You will first update the issue file with a plan, and once it's updated you will implement it.

1. Use the **plan** skill with the issue file to write a detailed implementation plan (updates the issue file only, no code yet).
2. Use the **execute** skill with the issue file to implement the plan across all layers.
