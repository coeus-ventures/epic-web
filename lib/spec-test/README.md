# spec-test Library

A specification-driven testing library that parses **product behavior specifications** (Epic Specification Format) and executes them as browser tests using AI-powered automation.

## Overview

The spec-test library bridges the gap between product specifications and automated testing. Instead of writing separate test files, you write behavior specifications for your product, and this library executes them directly against your running application.

```
Product Spec (Markdown) --> Parser --> Browser Automation --> Results
```

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        spec-test Library                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐      │
│  │ parseSpecFile│───>│SpecTestRunner│───>│ ExampleResult│      │
│  │              │    │              │    │              │      │
│  │ - name       │    │ - runExample │    │ - success    │      │
│  │ - directory  │    │ - runStep    │    │ - steps      │      │
│  │ - examples[] │    │              │    │ - failedAt   │      │
│  └──────────────┘    └──────┬───────┘    └──────────────┘      │
│                             │                                   │
│              ┌──────────────┴──────────────┐                   │
│              │                             │                   │
│       ┌──────▼──────┐             ┌────────▼────────┐          │
│       │  Stagehand  │             │     B-Test      │          │
│       │ (Act steps) │             │ (Check steps)   │          │
│       │             │             │                 │          │
│       │ AI-powered  │             │ Snapshot diff   │          │
│       │ browser     │             │ LLM assertions  │          │
│       │ automation  │             │                 │          │
│       └─────────────┘             └─────────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Epic Specification Format

The library parses markdown files written in the Epic Specification Format:

```markdown
# Behavior Name

Description of the behavior.

Directory: `app/(app)/behaviors/feature-name/`

## Examples

### Example scenario name

#### Steps
* Act: User performs some action
* Act: User fills in "value" in field name
* Check: URL contains /expected-path
* Check: Success message is displayed
```

### Structure

| Element | Description |
|---------|-------------|
| `# H1` | Behavior name |
| `Directory:` | Optional path to implementation |
| `## Examples` | Section containing test scenarios |
| `### H3` | Example name |
| `#### Steps` | Steps section for an example |
| `* Act:` | Action to perform (uses Stagehand) |
| `* Check:` | Verification to assert (uses B-Test) |

## Step Types

### Act Steps

Act steps describe user actions in natural language. They are executed using [Stagehand](https://github.com/browserbase/stagehand), an AI-powered browser automation tool.

```markdown
* Act: User clicks the Login button
* Act: User enters "user@example.com" in email field
* Act: User selects "Admin" from the role dropdown
* Act: User scrolls to the bottom of the page
```

Stagehand understands natural language and finds elements intelligently - no selectors needed.

### Check Steps

Check steps verify the application state. They are classified as either **deterministic** or **semantic**.

#### Deterministic Checks

These are verified directly using Playwright assertions (fast, no AI):

```markdown
* Check: URL contains /dashboard
* Check: URL is https://example.com/home
* Check: Page title is "Dashboard"
* Check: Page title contains "Welcome"
```

Supported patterns:
- `URL contains X`
- `URL is X`
- `Page title is X`
- `Page title contains X`

#### Semantic Checks

All other checks use [B-Test](../b-test/README.md) for LLM-powered assertions:

```markdown
* Check: Success notification is displayed
* Check: Error message shows "Invalid credentials"
* Check: New project appears in the list
* Check: User avatar is visible in the header
```

B-Test takes snapshots before/after actions and uses an LLM to verify conditions.

## Usage

### Programmatic Usage

```typescript
import { SpecTestRunner, parseSpecFile } from '@/lib/spec-test';

// Create runner
const runner = new SpecTestRunner({
  baseUrl: 'http://localhost:8080',
  headless: true,
});

// Run all examples from a spec file
const result = await runner.runFromFile('./docs/specs/login.md');

// Or run a specific example
const result = await runner.runFromFile(
  './docs/specs/login.md',
  'Login with valid credentials'
);

// Check results
if (result.success) {
  console.log('All examples passed!');
} else {
  result.exampleResults.forEach(example => {
    if (!example.success) {
      console.log(`Failed: ${example.example.name}`);
      console.log(`Error: ${example.failedAt?.context.error}`);
    }
  });
}

await runner.close();
```

### Manual Test Runner

Use the CLI runner for interactive testing:

```bash
# Run with default spec
bun lib/spec-test/tests/run-spec.ts

# Run specific spec file
bun lib/spec-test/tests/run-spec.ts docs/specs/create-project.md

# Run specific example from spec
bun lib/spec-test/tests/run-spec.ts docs/specs/login.md "Login with email"

# With custom base URL
BASE_URL=http://localhost:3000 bun lib/spec-test/tests/run-spec.ts
```

### Integration Tests

```typescript
import { describe, it, expect } from 'vitest';
import { SpecTestRunner } from '@/lib/spec-test';

describe('Login Behavior', () => {
  let runner: SpecTestRunner;

  beforeAll(() => {
    runner = new SpecTestRunner({
      baseUrl: 'http://localhost:8080',
      headless: true,
    });
  });

  afterAll(() => runner.close());

  it('should login with valid credentials', async () => {
    const result = await runner.runFromFile(
      './docs/specs/login.md',
      'Login with valid credentials'
    );
    expect(result.success).toBe(true);
  }, 60000);
});
```

## Configuration

### SpecTestConfig

```typescript
interface SpecTestConfig {
  /** Base URL of the application under test */
  baseUrl: string;

  /** Use headless browser (default: true) */
  headless?: boolean;

  /** B-Test AI model override */
  aiModel?: LanguageModelV2;

  /** Browserbase API key for cloud execution */
  browserbaseApiKey?: string;

  /** Additional Stagehand options */
  stagehandOptions?: Record<string, unknown>;
}
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | Required for Stagehand and semantic checks |
| `BASE_URL` | Override default application URL |
| `BROWSERBASE_API_KEY` | For cloud browser execution |

## Result Types

### SpecTestResult

```typescript
interface SpecTestResult {
  success: boolean;              // All examples passed
  spec: TestableSpec;            // Parsed specification
  exampleResults: ExampleResult[]; // Results per example
  duration: number;              // Total duration in ms
}
```

### ExampleResult

```typescript
interface ExampleResult {
  example: SpecExample;          // Example that was run
  success: boolean;              // Example passed
  steps: StepResult[];           // Results per step
  duration: number;              // Example duration in ms
  failedAt?: {                   // Failure details
    stepIndex: number;
    step: SpecStep;
    context: FailureContext;
  };
}
```

### FailureContext

When a step fails, rich context is provided for debugging:

```typescript
interface FailureContext {
  pageSnapshot: string;          // Full HTML snapshot
  pageUrl: string;               // Current URL
  failedStep: SpecStep;          // Step that failed
  error: string;                 // Error message
  availableElements: Array<{     // Interactive elements on page
    type: string;
    text?: string;
    selector: string;
  }>;
  suggestions: string[];         // AI-generated fix suggestions
}
```

## How It Works

### Snapshot Lifecycle

The library manages B-Test's snapshot lifecycle for correct diff-based assertions:

1. **Initial snapshot** - Before any steps, capture baseline
2. **Before Act** - Reset snapshots, take fresh "before" baseline
3. **Execute Act** - Perform action, page state changes
4. **Check step** - Take "after" snapshot, compare diff, assert condition

```
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│ Initial │────>│  Act 1  │────>│ Check 1 │────>│  Act 2  │──> ...
│snapshot │     │ reset + │     │ after + │     │ reset + │
│         │     │snapshot │     │ assert  │     │snapshot │
└─────────┘     └─────────┘     └─────────┘     └─────────┘
```

### Example Flow

Given this spec:

```markdown
### Login with valid credentials

#### Steps
* Act: User enters "user@example.com" in email field
* Act: User enters "password123" in password field
* Act: User clicks Login button
* Check: URL contains /dashboard
```

Execution:

1. Navigate to `baseUrl`
2. Take initial snapshot
3. **Act 1**: Reset snapshots, snapshot, Stagehand fills email
4. **Act 2**: Reset snapshots, snapshot, Stagehand fills password
5. **Act 3**: Reset snapshots, snapshot, Stagehand clicks button
6. **Check**: Take after snapshot, verify URL contains "/dashboard"

## Dependencies

- **Stagehand** (`@browserbasehq/stagehand`) - AI-powered browser automation for Act steps
- **B-Test** (`@/lib/b-test`) - LLM-powered assertions for semantic Check steps
- **Playwright** - Browser automation engine (used by Stagehand)

## File Structure

```
lib/spec-test/
├── index.ts          # Main implementation
├── types.ts          # Type definitions
├── README.md         # This file
└── tests/
    ├── run-spec.ts           # Manual CLI runner
    ├── integration.test.ts   # Integration tests
    └── fixtures/
        ├── login-spec.md         # Sample spec
        ├── login-failure-spec.md # Failure test spec
        ├── login-page.html       # Test HTML page
        └── dashboard-page.html   # Test HTML page
```

## Best Practices

1. **Write specs first** - Define behavior before implementing
2. **Use deterministic checks when possible** - Faster and more reliable
3. **Keep examples focused** - One scenario per example
4. **Use descriptive names** - Example names should describe the scenario
5. **Test failure paths** - Include examples for error states

## Troubleshooting

### "Element not found"

- Stagehand couldn't find the element. Check the failure context for available elements.
- Try more specific language in the Act step.

### Semantic check failing

- The LLM couldn't verify the condition. Check if the condition is clear.
- Consider using a deterministic check if possible.

### Timeout errors

- Increase timeout in test configuration.
- Check if page is fully loaded before actions.
- Verify the application is running at `baseUrl`.
