---
name: break
description: Break a PRD into individual implementation issues, one per page prototype and one per behavior. Use when the user wants to turn a PRD into a set of issues. Triggers on "break the PRD into issues" or "break down the PRD".
---

# Break

Given the PRD the user provides (a file in `.epic/prds/`), break it into issues.

- Break the PRD into issues. The number of issues should match the PRD — do not pad with extra issues, and do not invent requirements that are not in the PRD.
- Create one issue "Implement [page name] prototype" to implement the components of the page and create the page without any behaviors, only a front-end prototype.
- Create one issue per behavior.
- If the PRD has a **Flows** section, use it to order the issues: behaviors that appear earlier in a flow must be implemented before behaviors that appear later.
- Each issue is just the title and a brief overview. We will use the **plan** and **execute** skills later to turn each one into a full plan and implement it.
- Issues tend to follow this naming convention:
  - Implement [name of the behavior] in [name of the page]
  - Implement [name of the page] components
  - Change [name of the behavior] in [name of the page] to X
  - Fix [name of the bug] in [name of the behavior]
  - Change design of [name of the component/page] in [name of the page] to X
- Create the issues in the folder `.epic/issues`.
