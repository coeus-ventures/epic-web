# Configuração do Projeto - Web Template

Esta pasta `.claude/` contém as configurações específicas do projeto para o Claude Code CLI.

## MCP Servers Configurados

O projeto possui os seguintes MCP servers configurados em `.mcp.json`:

### 1. Next.js DevTools MCP (`next-devtools`)
Fornece ferramentas de desenvolvimento Next.js para diagnósticos em tempo real, automação e acesso à documentação.

**Uso:**
```
Next DevTools, init
Next DevTools, what errors are in my Next.js application?
Next DevTools, show me the structure of my routes
```

**Requisitos:**
- Node.js v20.19+
- Projeto Next.js rodando (`npm run dev`)

### 2. Figma Dev Mode MCP (`figma-dev-mode`)
Conecta o Claude Code aos designs do Figma para conversão de designs em código.

**Uso:**
```
Convert this Figma design to React: [link-do-figma]
Use my current selection in Figma to implement this component
```

**Requisitos:**
- Figma Desktop App (atualizado)
- Dev Mode MCP Server habilitado em: Figma Menu → Preferences → Enable Dev Mode MCP Server
- O servidor roda localmente em: `http://127.0.0.1:3845/sse`

## Permissões Configuradas

- ✅ Web Fetch - Acesso a qualquer domínio (`WebFetch(domain:*)`)
- ✅ Web Search - Busca na web (`WebSearch`)
- ✅ MCP Servers - Next.js DevTools e Figma

## Comandos Úteis

```bash
# Ver status dos MCP servers
/mcp

# Listar MCP servers configurados
claude mcp list

# Adicionar MCP server em escopo de projeto
claude mcp add --scope project <name> <command>

# Resetar aprovações de MCP servers do projeto
claude mcp reset-project-choices
```

## Inicialização Automática Next.js

Quando trabalhar em projetos Next.js, o Claude Code deve chamar automaticamente a ferramenta `init` do next-devtools-mcp no início da sessão.
