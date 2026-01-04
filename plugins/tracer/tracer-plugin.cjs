/**
 * Babel Plugin AutoTracer - Modo Tracer
 * Blindado para ignorar Middleware e arquivos fora de /behaviors/
 */
module.exports = function autoTracerPlugin({ types: t }) {
  
  function isClientFile(filename) {
    if (!filename) return false;
    const normalized = filename.replace(/\\/g, '/');
    
    return normalized.includes('/behaviors/');
  }

  function isLibraryFunction(name) {
    if (!name) return false;
    if (name.length <= 3) return true;
    if (name.startsWith('_')) return true;
    if (/^use[A-Z]/.test(name)) return true;

    const blocked = [
      'render', 'hydrate', 'createElement', 'forwardRef', 'memo', 'lazy',
      'clsx', 'twMerge', 'classNames'
    ];
    return blocked.includes(name);
  }

  function createLogStatement(functionName, params) {
    const paramNames = params
      .filter(p => t.isIdentifier(p))
      .map(p => p.name);
    
    const argsObject = t.objectExpression(
      paramNames.map(name => 
        t.objectProperty(t.identifier(name), t.identifier(name), false, true)
      )
    );
    
    const stackExpr = t.memberExpression(
      t.newExpression(t.identifier('Error'), []),
      t.identifier('stack')
    );
    
    return t.expressionStatement(
      t.callExpression(
        t.identifier('__trace'),
        [t.stringLiteral(functionName), argsObject, stackExpr]
      )
    );
  }

  function injectLog(path, functionName) {
    if (path.node._traced) return;
    path.node._traced = true;
    
    const body = path.node.body;
    
    if (!t.isBlockStatement(body)) {
      path.node.body = t.blockStatement([
        createLogStatement(functionName, path.node.params),
        t.returnStatement(body)
      ]);
      return;
    }
    
    body.body.unshift(createLogStatement(functionName, path.node.params));
  }

  return {
    name: 'autotracer-tracer',
    
    visitor: {
      Program(path, state) {
        if (!isClientFile(state.filename)) {
            path.stop(); 
            return;
        }
        
        path.node.body.unshift(
          t.importDeclaration(
            [t.importSpecifier(t.identifier('__trace'), t.identifier('__trace'))],
            t.stringLiteral('@/plugins/tracer/tracer-runtime')
          )
        );
      },

      Function(path, state) {
        if (!isClientFile(state.filename)) return;

        let funcName = 'anonymous';
        if (path.node.id) funcName = path.node.id.name;
        else if (path.parent.id) funcName = path.parent.id.name;
        else if (path.parent.key) funcName = path.parent.key.name;

        if (isLibraryFunction(funcName)) return;

        injectLog(path, funcName);
      }
    }
  };
};