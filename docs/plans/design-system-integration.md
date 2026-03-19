# Plan: Design System Integration into Workflow

This plan integrates the existing design system into the AI workflow to ensure:
- Existing components are reused (no duplication)
- Semantic design tokens are used (no hardcoded colors)
- New components are properly documented in the styleguide

---

## Files to Create

### 1. `docs/DESIGN.md`

**Purpose**: Lightweight AI entry point to the design system.

**Content**:
- "Where to Find Things" table pointing to source files
- "Before Writing UI Code" checklist
- Rules (never hardcode, never recreate, document new components)

**Key principle**: This file contains **zero values** — only file paths. AI reads the actual source files for current values. This makes DESIGN.md maintenance-free even when:
- Tokens change in `globals.css`
- Components are added/removed from `navigation.ts`
- New component directories are created (e.g., `components/ai-elements/`)

**Example structure**:
```markdown
## Where to Find Things

| What | Location |
|------|----------|
| Available components | `app/styleguide/navigation.ts` |
| Design tokens | `app/globals.css` |
| Component source | `components/` (check subdirectories: `ui/`, etc.) |
| Component docs | `app/styleguide/components/[name]/page.tsx` |

## Before Writing UI Code

1. Read `app/styleguide/navigation.ts` — find existing components
2. Check `components/` subdirectories for existing components — never recreate
3. Read `app/globals.css` — use only defined tokens

## Rules

- Never hardcode colors — use CSS variables from globals.css
- Never recreate components — compose from existing
- New shared components must be added to styleguide + navigation.ts
```

---

## Files to Modify

### 2. `app/styleguide/navigation.ts`

**What changes**: Minimal edits only.

**Edit 1** — Add optional field to `NavItem` type:
```typescript
description?: string  // AI-only: when to use this component
```

**Edit 2** — Add `description` property to each component item (keep all existing properties unchanged)

**Example descriptions**:
```typescript
{ title: 'Button', href: '...', description: 'Trigger actions: form submit, dialog open, navigation' },
{ title: 'Card', href: '...', description: 'Group related content with visual separation' },
{ title: 'Dialog', href: '...', description: 'Modal overlay requiring user attention or input' },
```

**Guidelines for descriptions**:
- Keep under 60 characters
- Focus on use case/trigger, not implementation
- Start with a verb or noun (e.g., "Trigger...", "Display...", "Group...")

---

### 3. `.claude/CLAUDE.md`

**What changes**: Minimal edit — insert new section after "Frontend Design". No other changes.

**Content to add**:
```markdown
## Design System

Before writing any UI code, read `docs/DESIGN.md` for the component inventory and design tokens.

**Key rules**:
- Check `components/` subdirectories for existing components before creating new ones
- Use semantic color tokens (`bg-primary`, `text-muted-foreground`) — never hardcode colors
- New shared components must be added to the styleguide
```

---

### 4. `.claude/agents/component-writer.md`

**What changes**: Minimal edits to add design system check.

**Edit 1** — In "When Invoked", prepend a new step 1 before existing steps:
```markdown
1. **Read `docs/DESIGN.md`** to check available components and design tokens
```
Then renumber existing steps (1→2, 2→3, etc.)

**Edit 2** — In "Key Responsibilities", add two new bullet points at the top:
```markdown
- **Prioritize existing components** from `components/` subdirectories before creating new ones
- **Use semantic design tokens** (`bg-primary`, `text-muted-foreground`) — never hardcode colors
```
Keep all existing bullet points unchanged.

---

### 5. `.claude/skills/write-component/SKILL.md`

**What changes**: Minimal edit — insert new sections after "Architecture Context". Keep all existing content unchanged.

**Content to insert**:

```markdown
## Before Writing a Component

1. **Read `docs/DESIGN.md`** for the component inventory
2. **Check if it already exists**: Review `app/styleguide/navigation.ts`
3. **Use existing primitives**: Compose from components in `components/` subdirectories
4. **Use design tokens**: Use Tailwind semantic classes mapped to CSS variables

## Design Token Usage

**Read `app/globals.css`** to see all available semantic tokens.

Use Tailwind classes mapped to CSS variables (e.g., `bg-primary`, `text-muted-foreground`, `border-border`).

**Never use** hardcoded colors like `bg-gray-100`, `text-black`, `#ffffff`, or `rgb(...)`.

The token names in `globals.css` map directly to Tailwind classes:
- `--primary` → `bg-primary`, `text-primary`
- `--muted-foreground` → `text-muted-foreground`
- `--border` → `border-border`

## When Creating New Shared Components

If a component doesn't exist and should be reusable:
1. Create it in `components/ui/[component-name].tsx`
2. Add a styleguide page at `app/styleguide/components/[component-name]/page.tsx`
3. Update `app/styleguide/navigation.ts` with the new component (include description)
4. Follow the styleguide page pattern with "Notes for the AI" section
```

---

### 6. `.claude/commands/plan.md`

**What changes**: Minimal edit — prepend a new step before existing step 1.

**Edit** — Add new step 1 at the beginning of the numbered list:
```markdown
1. **Check the design system**: Read `docs/DESIGN.md` to identify which existing components can be reused and which design tokens are available. Note in the plan which components will be used vs. created.
```
Then renumber existing steps (1→2, 2→3).

---

## Execution Order

1. **Create** `docs/DESIGN.md` (the entry point)
2. **Modify** `app/styleguide/navigation.ts` (add descriptions)
3. **Modify** `.claude/CLAUDE.md` (add design system section)
4. **Modify** `.claude/agents/component-writer.md` (update workflow)
5. **Modify** `.claude/skills/write-component/SKILL.md` (add design system sections)
6. **Modify** `.claude/commands/plan.md` (add design system check)

---

## Validation

After implementation, verify:
- [ ] `docs/DESIGN.md` exists and references correct paths
- [ ] All navigation items have descriptions
- [ ] CLAUDE.md mentions DESIGN.md
- [ ] component-writer agent checks DESIGN.md first
- [ ] write-component skill includes token usage guide
- [ ] plan command includes design system check step
