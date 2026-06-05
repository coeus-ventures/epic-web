## 8. Component Specification Format

Component specifications describe **UI components** in terms of their inputs, state, and structure.

### Purpose

Component specifications answer:
- What inputs it accepts
- What state it owns locally
- What state it shares with other components
- How it is composed structurally

### Structure

A component specification consists of:
1. A heading naming the **component**
2. A short description
3. Optional **props** accepted by the component
4. A **state** section, grouped into Local and Shared
5. Optional **children** listing direct subcomponents

### Conventions

- The component name is an H1 heading
- All subsections are H2 headings
- State is always grouped under **Local** and **Shared**
- State entries use the format `name: type`
- Absence of a section is meaningful

### Example

```markdown
# CreateProjectForm

Renders the form used to create a new project.

## Props
- onSuccess: (projectId: number) => void

## State

### Local
- name: string
- isSubmitting: boolean

### Shared
- status: boolean
- result: string

## Children
- TextInput
- SubmitButton
- ErrorBanner
```

---

