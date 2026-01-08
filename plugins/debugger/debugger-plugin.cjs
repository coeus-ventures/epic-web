/**
 * Debugger Plugin - Logs em cada statement com variáveis inicializadas
 * Baseado na lógica do CLI debugger que funciona perfeitamente
 */
module.exports = function debuggerPlugin({ types: t }) {

  function isTargetFile(filename) {
    if (!filename) return false;
    const normalized = filename.replace(/\\/g, '/');
    if (normalized.includes('node_modules') || normalized.includes('.next')) return false;
    return normalized.includes('/behaviors/');
  }

  function isIgnoredFunction(name) {
    if (!name) return true;
    if (name.startsWith('_')) return true;
    const blocked = ['render', 'hydrate', 'createElement', 'clsx', 'twMerge'];
    return blocked.includes(name);
  }

  function createDebugStatement(filename, line, funcName, availableVars) {
    const objProps = availableVars.map(name =>
      t.objectProperty(t.identifier(name), t.identifier(name), false, true)
    );

    const callExpr = t.callExpression(t.identifier('__debug_trace'), [
      t.stringLiteral(filename),
      t.numericLiteral(line),
      t.stringLiteral(funcName),
      t.objectExpression(objProps)
    ]);

    const stmt = t.expressionStatement(callExpr);
    stmt._debugInjected = true;
    return stmt;
  }

  function extractNamesFromPattern(pattern) {
    if (!pattern) return [];
    
    if (t.isIdentifier(pattern)) return [pattern.name];
    if (t.isRestElement(pattern)) return extractNamesFromPattern(pattern.argument);
    if (t.isAssignmentPattern(pattern)) return extractNamesFromPattern(pattern.left);
    
    if (t.isObjectPattern(pattern)) {
      return pattern.properties.flatMap(prop => 
        extractNamesFromPattern(t.isRestElement(prop) ? prop.argument : prop.value)
      );
    }
    
    if (t.isArrayPattern(pattern)) {
      return pattern.elements.flatMap(extractNamesFromPattern);
    }
    
    return [];
  }

  function extractParams(params) {
    return params.flatMap(param => extractNamesFromPattern(param));
  }

  function extractDeclaredVars(node) {
    if (!t.isVariableDeclaration(node)) return [];
    return node.declarations.flatMap(decl => extractNamesFromPattern(decl.id));
  }

  function shouldSkipStatement(node) {
    return (
      node._debugInjected ||
      t.isSwitchCase(node) ||
      t.isLabeledStatement(node) ||
      t.isEmptyStatement(node) ||
      t.isImportDeclaration(node) ||
      t.isExportDeclaration(node) ||
      (t.isExpressionStatement(node) && t.isStringLiteral(node.expression))
    );
  }

  function processBlockStatements(bodyPath, funcName, filename, initialVars) {
    const statements = bodyPath.get('body');
    const initializedVars = new Set(initialVars);
    
    const insertions = statements.reduce((acc, stmtPath) => {
      const node = stmtPath.node;
      
      if (shouldSkipStatement(node)) {
        if (t.isVariableDeclaration(node)) {
          extractDeclaredVars(node).forEach(name => initializedVars.add(name));
        }
        return acc;
      }
      
      const line = node.loc?.start.line ?? 0;
      const availableVars = [...initializedVars].filter(n => !n.startsWith('_'));
      
      acc.push({
        path: stmtPath,
        debugStmt: createDebugStatement(filename, line, funcName, availableVars)
      });
      
      if (t.isVariableDeclaration(node)) {
        extractDeclaredVars(node).forEach(name => initializedVars.add(name));
      }
      
      return acc;
    }, []);
    
    insertions.reverse().forEach(({ path, debugStmt }) => {
      path.insertBefore(debugStmt);
    });
    
    return insertions.length;
  }

  return {
    name: 'debugger-plugin',
    
    visitor: {
      Program(path, state) {
        if (!isTargetFile(state.filename)) {
          path.stop();
          return;
        }

        let hasImport = false;
        path.traverse({
          ImportDeclaration(p) {
            if (p.node.source.value.includes('debugger/debugger-runtime')) {
              hasImport = true;
              p.stop();
            }
          }
        });

        if (!hasImport) {
          path.node.body.unshift(
            t.importDeclaration(
              [t.importSpecifier(t.identifier('__debug_trace'), t.identifier('__debug_trace'))],
              t.stringLiteral('@/plugins/debugger/debugger-runtime')
            )
          );
        }
      },

      Function(path, state) {
        if (!isTargetFile(state.filename)) return;
        if (path.node._debugProcessed) return;
        path.node._debugProcessed = true;

        let funcName = 'anonymous';
        if (path.node.id) {
          funcName = path.node.id.name;
        } else if (path.parent && path.parent.id) {
          funcName = path.parent.id.name;
        } else if (path.parent && path.parent.key && t.isIdentifier(path.parent.key)) {
          funcName = path.parent.key.name;
        }

        if (isIgnoredFunction(funcName)) return;

        if (!t.isBlockStatement(path.node.body)) {
          const returnStmt = t.returnStatement(path.node.body);
          path.node.body = t.blockStatement([returnStmt]);
        }

        const bodyPath = path.get('body');
        if (!t.isBlockStatement(bodyPath.node)) return;

        const params = extractParams(path.node.params);
        const filename = state.filename ? state.filename.split(/[/\\]/).pop() : 'unknown';

        processBlockStatements(bodyPath, funcName, filename, params);
      }
    }
  };
};