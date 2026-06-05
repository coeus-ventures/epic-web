## 7. Class Specification Format

Class specifications describe **object-oriented units** including their state, methods, and relationships.

### Structure

A class specification consists of:
1. A heading naming the **class**
2. A short description of its responsibility
3. **Properties** (state)
4. **Methods** (which may reference Function specs)
5. Optional **relationships** (extends, implements, composes)
6. Optional **Scenarios** showing usage scenarios

### Scenarios Section

Not every method needs a scenario. Include scenarios for key usage cases that demonstrate how the class is used in practice. Scenarios follow the same PreDB/Steps/PostDB format as other specs.

### Example

```markdown
# ProjectService

Manages project lifecycle operations including creation, updates, and deletion.

## Properties
- db: Database
- validator: ProjectValidator
- logger: Logger

## Methods
- create(input: NewProject): ProjectId
- update(id: ProjectId, changes: ProjectUpdate): Project
- delete(id: ProjectId): void
- findById(id: ProjectId): Project | null

## Relationships
- Implements: IProjectService
- Composes: ProjectValidator, Database

## Scenarios

### Create a new project

#### PreDB
projects:
id, name, status
(empty)

#### Steps
* Call: service.create({ name: "New Project" })
* Returns: { id: 1, name: "New Project", status: "draft" }

#### PostDB
projects:
id, name, status
1, New Project, draft

### Reject duplicate project name

#### PreDB
projects:
id, name, status
1, Existing Project, active

#### Steps
* Call: service.create({ name: "Existing Project" })
* Throws: "Project name already exists"

#### PostDB
projects:
id, name, status
1, Existing Project, active
```

---

