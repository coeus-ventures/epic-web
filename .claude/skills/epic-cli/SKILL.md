---
name: epic-cli
description: Use the Epic CLI for project and issue management, PRD-driven specs, the AI agent-driven issue lifecycle (plan/execute/verify/review/merge), design tokens, and UI prototypes. Triggers on requests like "create a project", "generate a PRD", "break a PRD into issues", "plan/build an issue", "review/merge an issue", or "apply the design".
---

# Epic CLI

## Overview

Epic CLI manages projects and issues backed by Markdown files and GitHub. It drives a
PRD → issues → implementation workflow where each issue is taken through an AI agent
lifecycle (plan, execute, verify, fix, review, merge). It also handles DESIGN.md,
UI prototypes, per-issue preview servers, and git worktrees.

Run any command with no args or `--help` for subcommands: `epic <command> --help`.

## Storage & settings

`.epic/settings.json` configures where things live:

```json
{ "baseDirectory": ".epic", "issuesDirectory": "issues", "draftsDirectory": "drafts", "type": "web" }
```

- **PRDs**: `.epic/prds/` as `PRD-[N]-[slug].md`
- **Issues**: `.epic/issues/` as `{prefix}-{number}-{slug}.md`

Issue IDs accept a Markdown path, an issue number, or `prefix-number` (e.g. `CLI-8`).

Many agent commands accept `--provider claude|codex|opencode` and `-b` (detach: run in
background instead of attaching a viewer).

## Project

| Command | Description |
|---------|-------------|
| `epic project new [name] [--web\|--terminal\|--empty] [--codex\|--opencode]` | Create a project + GitHub repo from a template |
| `epic project plan` | Interview with the agent to draft/refine the project spec (resumes a prior session) |
| `epic project build [--mode auto\|manual] [--clean]` | Build all issues, walking the dependency graph; detaches an orchestrator and attaches a viewer |

## PRD (product requirements)

| Command | Description |
|---------|-------------|
| `epic prd new [title]` | Create a blank PRD in `.epic/prds/` |
| `epic prd generate [description]` | AI-generate a PRD from a description |
| `epic prd list [--status draft\|active\|archived]` | List PRDs |
| `epic prd plan <PRD-id\|path>` | Fill the PRD body with a structured spec |
| `epic prd interview <PRD-id\|path>` | Interview the user and rewrite the PRD body in place |
| `epic prd attach <PRD-id\|path>` | Attach to / resume the PRD's agent session |
| `epic prd break <PRD-id\|path>` | Break a PRD into issues in `.epic/issues/` |

## Issue

Creation, sync, and housekeeping:

| Command | Description |
|---------|-------------|
| `epic issue new [title] [--no-sync]` | Create an issue (syncs to GitHub unless `--no-sync`) |
| `epic issue list [open\|closed]` | List issues |
| `epic issue show <id>` | Show issue details |
| `epic issue get <id>` | Download issue from GitHub |
| `epic issue sync push\|pull <id>` | Push/pull changes to/from GitHub |
| `epic issue assign <id> <user>` | Assign issue |
| `epic issue close <id>` | Close issue and clean up |
| `epic issue worktree <id>` | Create just a worktree (no tmux/agent) |

Agent-driven lifecycle (each takes `--provider`, most take `-b`):

| Command | Description |
|---------|-------------|
| `epic issue plan <id>` | Update the issue with an implementation plan |
| `epic issue execute <id>` | Implement the plan (resumes the plan's session) |
| `epic issue build <id> [--mode auto\|manual]` | Full loop: plan + execute + verify-fix. `manual` (default) leaves the issue "In Review" with the worktree kept |
| `epic issue verify <id> [-p PORT]` | Verify the issue in a browser via playwright |
| `epic issue fix <id>` | Fix failing scenarios from a prior verify |
| `epic issue interview <id>` | Interview the user and rewrite the issue in place |
| `epic issue review <id>` | Review the worktree diff vs main; write a `# Review` section |
| `epic issue pr <id>` | Push the branch and open/surface its GitHub PR |
| `epic issue merge <id>` | Agent-driven merge of the worktree branch into main |
| `epic issue approve <id>` | Approve an In-Review issue: agent-merge into main, mark Done |
| `epic issue attach\|stop <id>` | Attach to / stop a running session |

## Design

| Command | Description |
|---------|-------------|
| `epic design new [title] [--force]` | Create a blank `DESIGN.md` scaffold at the project root |
| `epic design generate [description]` | AI-generate `DESIGN.md` from a description |
| `epic design apply` | Apply `DESIGN.md` to the project via an agent |

## Prototype

| Command | Description |
|---------|-------------|
| `epic prototype new "<description>" [--web\|--terminal]` | Scaffold a numbered prototype folder + `prompt.md`; the agent writes `page.tsx` (web) or `screen.tsx` (terminal) |
| `epic prototype list` | List prototypes; Enter resumes a prototype's agent session |

## Preview (per-issue dev server)

| Command | Description |
|---------|-------------|
| `epic preview start\|stop\|url\|list <id>` | Start/stop/inspect a dev server running in an issue's worktree |

## Worktrees

| Command | Description |
|---------|-------------|
| `epic wt list [--paths]` | List git worktrees |
| `epic wt new <branch> [path]` | Create a worktree and print its path |
| `epic wt path <branch>` | Print a branch's worktree path |
| `epic wt switch <branch> [-c] [-x cmd -- args]` | Print/enter a worktree path, optionally run a command in it |
| `epic wt prune` / `epic wt remove [branch]` | Clean up stale refs / remove a worktree + branch |

## Other

- `epic stage assign --stage "In Review" --user alice` — auto-assign a user when an issue reaches a stage.
- `epic login [name] [--url]`, `epic logout`, `epic whoami`, `epic profile` — authentication and saved credential profiles.

## Common Workflows

**PRD-driven build:**
```bash
epic prd generate "E-commerce platform"   # AI-draft a PRD in .epic/prds/
epic prd break PRD-1                       # Create issue files in .epic/issues/
epic project build                         # Build all issues by dependency order
```

**Single issue, end to end:**
```bash
epic issue new "Add dark mode support"     # Create + sync to GitHub
epic issue build CLI-8                      # plan + execute + verify-fix loop
epic issue review CLI-8                     # Write a review of the diff
epic issue approve CLI-8                    # Merge into main and mark Done
```

**Prototype an idea:**
```bash
epic prototype new "Login page with email and password" --web
```

**Design system:**
```bash
epic design generate "dark fintech dashboard, minimal, Inter font, blue accent"
epic design apply
```
