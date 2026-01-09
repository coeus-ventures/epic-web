/**
 * Manual Spec Test Runner
 *
 * Run this script to test the spec-test library against a real running application.
 *
 * Usage:
 *   bun lib/spec-test/tests/run-spec.ts [spec-file] [example-name]
 *
 * Examples:
 *   bun lib/spec-test/tests/run-spec.ts                                          # Run sample spec
 *   bun lib/spec-test/tests/run-spec.ts docs/specs/login.md                      # Run all examples
 *   bun lib/spec-test/tests/run-spec.ts docs/specs/login.md "Login with email"   # Run specific example
 *
 * Requirements:
 *   - App running on http://localhost:8080 (or set BASE_URL env)
 *   - OPENAI_API_KEY set for semantic checks
 */

import { SpecTestRunner, parseSpecFile } from "../index";
import path from "path";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
const SPEC_FILE = process.argv[2] ?? path.join(__dirname, "fixtures", "login-spec.md");
const EXAMPLE_NAME = process.argv[3]; // Optional: run specific example

async function main() {
  console.log("=".repeat(60));
  console.log("Spec Test Runner");
  console.log("=".repeat(60));
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Spec file: ${SPEC_FILE}`);
  if (EXAMPLE_NAME) {
    console.log(`Example: ${EXAMPLE_NAME}`);
  }
  console.log();

  // Parse the spec file first to show what we're testing
  const spec = await parseSpecFile(SPEC_FILE);
  console.log(`Behavior: ${spec.name}`);
  if (spec.directory) {
    console.log(`Directory: ${spec.directory}`);
  }
  console.log(`Examples: ${spec.examples.length}`);
  console.log();

  // Show all examples and their steps
  spec.examples.forEach((example, exampleIndex) => {
    const willRun = !EXAMPLE_NAME || example.name === EXAMPLE_NAME;
    const marker = willRun ? ">>>" : "   ";
    console.log(`${marker} Example ${exampleIndex + 1}: ${example.name}`);

    example.steps.forEach((step, i) => {
      const prefix = step.type === "act" ? "->" : "ok";
      const checkType = step.checkType ? ` [${step.checkType}]` : "";
      console.log(`      ${i + 1}. ${prefix} ${step.type.toUpperCase()}: ${step.instruction}${checkType}`);
    });
    console.log();
  });

  // Create runner
  const runner = new SpecTestRunner({
    baseUrl: BASE_URL,
    headless: false, // Show browser for debugging
  });

  try {
    console.log("Starting browser...");
    const result = await runner.runFromSpec(spec, EXAMPLE_NAME);

    console.log();
    console.log("=".repeat(60));
    console.log(result.success ? "PASSED" : "FAILED");
    console.log("=".repeat(60));
    console.log(`Total Duration: ${result.duration}ms`);
    console.log(`Examples Run: ${result.exampleResults.length}`);
    console.log();

    // Show results for each example
    result.exampleResults.forEach((exampleResult, exampleIndex) => {
      const status = exampleResult.success ? "[PASS]" : "[FAIL]";
      console.log(`${status} Example ${exampleIndex + 1}: ${exampleResult.example.name}`);
      console.log(`  Duration: ${exampleResult.duration}ms`);

      // Show step results
      exampleResult.steps.forEach((stepResult, i) => {
        const stepStatus = stepResult.success ? "+" : "x";
        const type = stepResult.step.type.toUpperCase();
        console.log(`  ${stepStatus} Step ${i + 1} (${type}): ${stepResult.step.instruction}`);

        if (stepResult.actResult && !stepResult.actResult.success) {
          console.log(`    Error: ${stepResult.actResult.error}`);
        }
        if (stepResult.checkResult && !stepResult.checkResult.passed) {
          console.log(`    Expected: ${stepResult.checkResult.expected}`);
          console.log(`    Actual: ${stepResult.checkResult.actual}`);
          if (stepResult.checkResult.reasoning) {
            console.log(`    Reasoning: ${stepResult.checkResult.reasoning}`);
          }
        }
      });

      // Show failure context if failed
      if (exampleResult.failedAt) {
        console.log();
        console.log("  Failure Context:");
        console.log(`    Step: ${exampleResult.failedAt.stepIndex + 1}`);
        console.log(`    URL: ${exampleResult.failedAt.context.pageUrl}`);
        console.log(`    Error: ${exampleResult.failedAt.context.error}`);
        console.log();
        console.log("    Suggestions:");
        exampleResult.failedAt.context.suggestions.forEach(s => {
          console.log(`      - ${s}`);
        });
        console.log();
        console.log("    Available Elements:");
        exampleResult.failedAt.context.availableElements.slice(0, 10).forEach(el => {
          console.log(`      - ${el.type}: ${el.text || el.selector}`);
        });
      }

      console.log();
    });

    // Summary
    const passed = result.exampleResults.filter(r => r.success).length;
    const failed = result.exampleResults.filter(r => !r.success).length;
    console.log("=".repeat(60));
    console.log(`Summary: ${passed} passed, ${failed} failed`);
    console.log("=".repeat(60));

    process.exit(result.success ? 0 : 1);
  } catch (error) {
    console.error("Runner error:", error);
    process.exit(1);
  } finally {
    await runner.close();
  }
}

main();
