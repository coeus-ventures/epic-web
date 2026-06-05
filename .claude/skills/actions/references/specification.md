## 6. Function Specification Format

Function specifications describe the **behavioral contract** of a single function. They focus on _intent_, not implementation.

### Structure

A function specification consists of:
1. A heading whose title is the **function signature**
2. A short description
3. A small set of keywords
4. Optional **Scenarios** with PreDB/PostDB (for functions that modify state)

### Keywords

- **Given** - input parameters and assumptions
- **Returns** - value or outcome returned
- **Calls** (optional) - direct dependencies

### Scenarios Section

For functions that modify database state (like server actions), include scenarios showing state transitions:

- **PreDB** - database state before execution (CSV format)
- **Steps** - function call and expected result using keywords:
  - `Call:` - invoke the function with specific inputs
  - `Returns:` - expected return value
  - `Throws:` - expected error (for error cases)
- **PostDB** - database state after execution (CSV format)

### Example (Simple Function)

```markdown
## validateProjectName(name: string): ValidationResult

Validates a project name against naming rules.

- Given: a project name string
- Returns: validation result with errors if invalid
```

### Scenario (Function with State Changes)

```markdown
## createProject(input: CreateProjectInput): Promise<Project>

Creates a new project for the authenticated user.

- Given: project name and authenticated user with "client" role
- Returns: the newly created project
- Calls: ProjectModel.findByNameAndUser, ProjectModel.create

### Scenario: Create project successfully

#### PreDB
users:
id, email, role
1, user@example.com, client

projects:
id, user_id, name, status
1, 1, Existing Project, active

#### Steps
* Call: createProject({ name: "New Project" }) as user 1
* Returns: { id: 2, name: "New Project", status: "draft", userId: 1 }

#### PostDB
projects:
id, user_id, name, status
1, 1, Existing Project, active
2, 1, New Project, draft

### Scenario: Reject duplicate name

#### PreDB
projects:
id, user_id, name
1, 1, My Project

#### Steps
* Call: createProject({ name: "My Project" }) as user 1
* Throws: "Project name already exists"

#### PostDB
projects:
id, user_id, name
1, 1, My Project
```

---

