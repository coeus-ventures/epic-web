#!/usr/bin/env bun
/**
 * spec-explorer: Explore a website and generate behavior specifications
 *
 * Usage:
 *   bun .claude/skills/spec-explorer/scripts/explore.ts <url> "<flow-description>"
 *
 * Environment Variables:
 *   OPENAI_API_KEY  - Required for Stagehand
 *   OUTPUT_FILE     - Save spec to file (default: stdout)
 *   MAX_STEPS       - Max steps (default: 10)
 *   HEADLESS        - Headless browser (default: false)
 */

import { Stagehand } from "@browserbasehq/stagehand";
import { writeFileSync } from "fs";

const URL_ARG = process.argv[2];
const FLOW_DESCRIPTION = process.argv[3];
const OUTPUT_FILE = process.env.OUTPUT_FILE;
const MAX_STEPS = parseInt(process.env.MAX_STEPS ?? "10", 10);
const HEADLESS = process.env.HEADLESS === "true";

interface RecordedStep {
  type: "act" | "check";
  instruction: string;
}

function printUsage() {
  console.log(`
spec-explorer: Explore a website and generate behavior specs

Usage:
  bun .claude/skills/spec-explorer/scripts/explore.ts <url> "<flow-description>"

Examples:
  bun .claude/skills/spec-explorer/scripts/explore.ts https://myapp.com/login "login flow"
  OUTPUT_FILE=docs/specs/login.md bun .claude/skills/spec-explorer/scripts/explore.ts https://myapp.com "signup"
`);
}

function toBehaviorName(desc: string): string {
  return desc
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function generateSpec(name: string, desc: string, steps: RecordedStep[], url: string): string {
  const lines = [
    `# ${name}`,
    "",
    `${desc}`,
    "",
    "## Examples",
    "",
    `### ${name} - Happy Path`,
    "",
    "#### Steps",
    ...steps.map((s) => `* ${s.type === "act" ? "Act" : "Check"}: ${s.instruction}`),
    "",
  ];
  return lines.join("\n");
}

async function explore(url: string, flowDescription: string) {
  console.error("Starting browser...");

  const stagehand = new Stagehand({
    env: "LOCAL",
    localBrowserLaunchOptions: { headless: HEADLESS },
  });

  await stagehand.init();
  const page = stagehand.context.activePage();
  if (!page) {
    throw new Error("Failed to get active page from Stagehand");
  }

  const steps: RecordedStep[] = [];
  let currentUrl = url;

  try {
    // Navigate to URL
    console.error(`Navigating to ${url}...`);
    await page.goto(url);
    currentUrl = page.url();

    const urlPath = new URL(url).pathname || "/";
    steps.push({ type: "act", instruction: `User navigates to ${urlPath}` });

    // Explore the flow
    for (let i = 0; i < MAX_STEPS; i++) {
      const context = steps.map((s) => s.instruction).join(", ");
      const prompt = i === 0
        ? `To ${flowDescription}, what is the first action to take?`
        : `Continue ${flowDescription}. Done: ${context}. What's next?`;

      console.error(`Step ${i + 1}: Observing...`);
      const observations = await stagehand.observe(prompt);

      if (!observations || observations.length === 0) {
        console.error("No more actions found.");
        break;
      }

      const observation = observations[0];
      const description = observation.description || "Unknown action";

      console.error(`  -> ${description}`);

      try {
        await stagehand.act(observation);
        steps.push({ type: "act", instruction: `User ${description}` });

        const newUrl = page.url();
        if (newUrl !== currentUrl) {
          const newPath = new URL(newUrl).pathname;
          steps.push({ type: "check", instruction: `URL contains ${newPath}` });
          currentUrl = newUrl;
        }

        await new Promise((r) => setTimeout(r, 500));
      } catch (err) {
        console.error(`  Action failed: ${err}`);
        break;
      }
    }

    // Final observation for semantic check
    const finalObs = await stagehand.observe("What is the main visible content or success indicator?");
    if (finalObs && finalObs.length > 0) {
      const indicator = finalObs[0].description || "";
      if (indicator && !indicator.toLowerCase().includes("click")) {
        steps.push({ type: "check", instruction: `${indicator} is displayed` });
      }
    }

    return {
      name: toBehaviorName(flowDescription),
      description: `Exploration of ${flowDescription} starting from ${url}.`,
      steps,
      finalUrl: page.url(),
    };
  } finally {
    await stagehand.close();
  }
}

async function main() {
  if (!URL_ARG || !FLOW_DESCRIPTION) {
    printUsage();
    process.exit(1);
  }

  if (!process.env.OPENAI_API_KEY) {
    console.error("Error: OPENAI_API_KEY required");
    process.exit(1);
  }

  console.error("=".repeat(50));
  console.error("spec-explorer");
  console.error("=".repeat(50));
  console.error(`URL: ${URL_ARG}`);
  console.error(`Flow: ${FLOW_DESCRIPTION}`);
  console.error("");

  const result = await explore(URL_ARG, FLOW_DESCRIPTION);
  const spec = generateSpec(result.name, result.description, result.steps, URL_ARG);

  if (OUTPUT_FILE) {
    writeFileSync(OUTPUT_FILE, spec);
    console.error(`\nSpec saved to: ${OUTPUT_FILE}`);
  } else {
    console.log(spec);
  }

  console.error("\n" + "=".repeat(50));
  console.error(`Done! ${result.steps.length} steps recorded.`);
  console.error("=".repeat(50));
}

main();
