---
name: spec-explorer
description: Explore a website using AI-powered browser automation and generate behavior specifications in Epic format. This skill should be used when users want to document an existing website flow, discover UI interactions, or generate test specifications from a running application. Triggers on "explore", "discover", or "document" a website.
---

# Spec Explorer

## Overview

This skill explores websites using Stagehand's AI-powered browser automation and generates behavior specifications in Epic format. The output is compatible with the spec-test library for automated testing.

## Usage

```bash
bun .claude/skills/spec-explorer/scripts/explore.ts <url> "<flow-description>"
```

### Examples

```bash
# Explore login flow
bun .claude/skills/spec-explorer/scripts/explore.ts https://myapp.com/login "login with email"

# Save to file
OUTPUT_FILE=docs/specs/login.md bun .claude/skills/spec-explorer/scripts/explore.ts https://myapp.com/login "login flow"

# Run headless
HEADLESS=true bun .claude/skills/spec-explorer/scripts/explore.ts https://myapp.com "signup"
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Yes | For Stagehand AI |
| `OUTPUT_FILE` | No | Save spec to file (default: stdout) |
| `MAX_STEPS` | No | Max exploration steps (default: 10) |
| `HEADLESS` | No | Headless browser (default: false) |

## How It Works

1. Navigate to URL
2. Use `stagehand.observe()` to discover interactive elements
3. Use `stagehand.act()` to navigate through the flow
4. Record actions as Act steps, URL changes as Check steps
5. Output Epic format spec

## Output Format

```markdown
# [Behavior Name]

[Description]

## Examples

### [Scenario] - Happy Path

#### Steps
* Act: User clicks Login button
* Act: User enters "test@example.com" in email field
* Check: URL contains /dashboard
```

## Integration with spec-test

```bash
# 1. Generate spec
OUTPUT_FILE=docs/specs/login.md bun .claude/skills/spec-explorer/scripts/explore.ts https://myapp.com/login "login"

# 2. Run as tests
bun lib/spec-test/tests/run-spec.ts docs/specs/login.md
```

## Reference

- Epic spec format: `lib/spec-test/README.md`
- Stagehand: `@browserbasehq/stagehand`
