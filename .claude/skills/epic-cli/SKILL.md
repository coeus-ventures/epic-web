---
name: epic-cli
description: Use the Epic CLI for project management, issue tracking, agent workflows, PR handling, git worktrees, debugging, code analysis, and spec generation. Triggers on requests like "create a project", "start an issue", "start an agent", "work on PR", "generate a spec", or "add debug statements".
---

# Epic CLI

## Overview

Epic CLI is a command-line tool for managing projects, issues, agents, and pull requests with an integrated workflow featuring git worktrees and optional tmux sessions. It includes static analysis, tracing, spec generation, and debugger controls.

## Getting Help

```bash
epic --help                # General help
epic <command> --help      # Command-specific help
```

## Project Commands

Create and manage GitHub repositories:

```bash
epic project new my-awesome-project          # Create new project
epic project new org/repo-name               # Create in organization
epic project new my-web-app --web            # Use web template
```

## Issue Commands

| Command | Description |
|---------|-------------|
| `epic issue new [title]` | Create new issue (interactive if no title) |
| `epic issue new --no-sync` | Create local issue without GitHub sync |
| `epic issue new --verbose` | Create with verbose output |
| `epic issue list` | List all issues |
| `epic issue list open` | List open issues |
| `epic issue list closed` | List closed issues |
| `epic issue show <id>` | Show issue details |
| `epic issue get <id>` | Download issue from GitHub |
| `epic issue sync push <id>` | Push local changes to GitHub |
| `epic issue sync pull <id>` | Pull GitHub changes to local |
| `epic issue start <id>` | Start working (creates worktree + tmux) |
| `epic issue start <id> --no-tmux` | Create worktree only (no tmux) |
| `epic issue start <id> --branch` | Create branch only (no worktree) |
| `epic issue assign <id> <user>` | Assign issue to user |
| `epic issue close <id>` | Close issue and cleanup |

Issue IDs can be: markdown file path, issue number, or prefix-number (e.g., `CLI-8`).

## Agent Commands

Manage AI agents that work on issues:

| Command | Description |
|---------|-------------|
| `epic agent start <input>` | Start agent with issue file or prompt |
| `epic agent start <input> --no-tmux` | Skip tmux session creation |
| `epic agent start <input> --no-switch` | Don't switch to tmux after creation |
| `epic agent list` | List all active agents |
| `epic agent pause <id>` | Pause agent (interrupt generation) |
| `epic agent send <id> <message>` | Send message to agent |
| `epic agent cancel <id>` | Cancel agent (full cleanup) |
| `epic agent switch <id>` | Switch to agent's tmux session |

```bash
epic agent start docs/issues/cli-8.md     # Start with existing issue
epic agent start "implement dark mode"    # Start with prompt (creates issue)
epic agent list                           # List all agents
epic agent pause cli-99                   # Pause agent
epic agent send cli-99 "fix the tests"    # Send message to agent
epic agent cancel cli-99                  # Cancel and cleanup
epic agent switch cli-99                  # Switch to session
```

## PR Commands

Start working on a pull request:

```bash
epic pr start 359            # Creates worktree + tmux session
epic pr start 359 --no-tmux  # Creates worktree only
```

## Debug Commands

Add/remove debug statements for tracing function execution:

| Command | Description |
|---------|-------------|
| `epic debug add <fn> <file>` | Add debug statement to function |
| `epic debug add <fn> <file> -r` | Add recursively (include called functions) |
| `epic debug remove <fn> <file>` | Remove debug statement from function |
| `epic debug remove <fn> <file> -r` | Remove recursively |
| `epic debug remove-all` | Remove all debug statements from project |

```bash
epic debug add myFunc ./src/file.ts
epic debug add myFunc ./src/file.ts -r    # Add to myFunc and all callees
epic debug remove myFunc ./src/file.ts -r # Remove from myFunc and callees
epic debug remove-all                      # Clean up all debug statements
```

## Analyze Commands

Static code analysis and call graph indexing:

```bash
epic analyze index ./src                  # Build call graph index
epic analyze function closeIssue          # Show callees for matching functions
epic analyze root                         # Show all entry points (never called)
epic analyze root commands                # Show entry points containing "commands"
```

## Trace Commands

Trace execution flows and perform static program slicing:

```bash
# Generate execution call stack from runtime [TRACE] logs
cat logs/dev.log | epic trace stack

# Perform static slicing on a variable (taint analysis)
cat graph.json | epic trace slice handleRequest rawId src/controllers/request.ts

# Chain commands
cat logs/dev.log | epic trace stack | epic trace slice processOrder userId src/services
```

## Debugger Commands

Toggle Epic Debugger mode for line-by-line debugging:

```bash
epic debugger on     # Enable line-by-line debugging (Variables Snapshot)
epic debugger off    # Disable and revert to standard tracer
```

This modifies `.env` to set `EPIC_DEBUGGER_ENABLED` and usually triggers a server restart.

## Spec Commands

Generate and break down project specifications:

```bash
epic spec generate                              # Generate spec interactively
epic spec generate "A CLI for deployments"     # Generate with description
epic spec break                                 # Break spec.md into issues
epic spec break ./docs/spec.md                 # Break custom spec file
```

## Style Commands

Apply design tokens to the project:

```bash
epic style apply                    # Prompts for CSS input
epic style apply "paste css here"  # Apply provided CSS tokens
```

Applies tweakcn design tokens to `globals.css`.

## Issue File Format

Issues are stored in the configured issues directory (default: `docs/issues/`) with pattern `{prefix}-{number}-{slug}.md`:

```markdown
# PROJ-123 Feature Title

Issue content and description goes here...
```

## Configuration

Epic CLI uses `.epic/settings.json` in the repository:

```json
{
  "baseDirectory": "docs",
  "issuesDirectory": "issues",
  "draftsDirectory": "drafts"
}
```

## Common Workflows

### Start Working on an Issue

```bash
epic issue start CLI-8
```

Creates a worktree, tmux session, and switches to it.

### Start an Agent on an Issue

```bash
epic agent start docs/issues/cli-8.md
```

Starts an AI agent to work on the issue.

### Generate a Project Spec

```bash
epic spec generate "A task management app with Kanban boards"
epic spec break
```

Generates a spec and breaks it into individual issues.

### Debug a Function

```bash
# Add debug statements to trace execution
epic debug add processOrder ./src/services/order.ts -r

# Run your code and observe logs

# Remove debug statements when done
epic debug remove-all
```

### Analyze Code Structure

```bash
# Build call graph
epic analyze index ./src

# Find what a function calls
epic analyze function handleRequest

# Find entry points
epic analyze root
```

### Trace Execution Flow

```bash
# Capture trace logs and generate stack
cat app.log | epic trace stack > stack.json

# Slice to find variable flow
cat stack.json | epic trace slice processPayment amount src/payments
```
