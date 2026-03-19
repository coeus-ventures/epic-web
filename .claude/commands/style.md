---
description: Apply tweakcn design tokens to project globals.css
argument-hint: paste your tweakcn globals.css output
---

# Style

I have two CSS files:
1. The **project's existing `globals.css`** (already in the codebase)
2. The **tweakcn output** (pasted below) with my chosen design tokens

Merge them correctly following the rules below.

## Input

[PASTE YOUR TWEAKCN globals.css OUTPUT HERE]

## Goal

Update the project's `/app/globals.css` to use the design tokens from tweakcn,
without breaking the existing project setup.

## Merge Rules

### KEEP from the project's existing globals.css (do not remove or replace):
- All `@import` statements (e.g. `@import "tailwindcss"`, `@import "tw-animate-css"`)
- The `@custom-variant dark` declaration
- The `@theme inline { ... }` block — keep it intact, only ADD missing variables if tweakcn introduces new ones not yet mapped
- The `@layer base { ... }` block
- Any custom component overrides at the bottom (e.g. Sonner toast fixes, scrollbar styles, etc.)

### REPLACE from tweakcn output:
- All CSS variable values inside `:root { ... }`
- All CSS variable values inside `.dark { ... }`

### INFER and ADD if tweakcn introduces variables not present in the project:
- If tweakcn defines new variables (e.g. `--shadow-sm`, `--shadow-lg`, `--font-serif`, `--spacing`, `--tracking-normal`) that are NOT in the project's `@theme inline` block, add the corresponding `@theme inline` mappings for them
- Follow the existing pattern: `--shadow-sm: var(--shadow-sm);`, `--font-serif: var(--font-serif);`, etc.
- If tweakcn defines `--radius` variations differently from the project (e.g. the project computes `--radius-sm: calc(var(--radius) - 4px)` but tweakcn doesn't), keep the project's computed values

### DO NOT:
- Remove any `@import` at the top
- Remove `@custom-variant dark`
- Remove or restructure `@theme inline`
- Remove `@layer base`
- Remove any custom overrides below `@layer base`
- Change the file structure or reorder sections
- Switch color formats (if project uses oklch and tweakcn uses rgb, keep tweakcn's values as-is — do not convert)

## Expected output structure

The final `globals.css` must follow this exact section order:

```css
/* 1. Imports — unchanged from project */
@import "tailwindcss";
@import "tw-animate-css";

/* 2. Dark variant — unchanged from project */
@custom-variant dark (&:is(.dark *));

/* 3. @theme inline — kept from project, with new variables added if needed */
@theme inline {
  ...
}

/* 4. :root — replaced with tweakcn values */
:root {
  ...
}

/* 5. .dark — replaced with tweakcn values */
.dark {
  ...
}

/* 6. @layer base — unchanged from project */
@layer base {
  ...
}

/* 7. Custom overrides — unchanged from project */
...
```

## After merging

- Read the final `globals.css` and list:
  - **New variables added** (from tweakcn, not previously in the project)
  - **Variables removed** (if any — there should be none)
  - **Color format used** (oklch / rgb / hsl)
  - **Font families defined** (if any)
  - **Shadow scale defined** (if any)

This summary will be used as context for Prompt 1.

## Rules

- Edit the file in place — do not create a new file
- Make the smallest possible change that achieves the merge
- When in doubt, preserve the project's existing structure and only swap values