/**
 * Babel Plugin Dispatcher
 * Carrega dinamicamente o plugin correto baseado em EPIC_DEBUGGER
 */
module.exports = function dispatcherPlugin(api) {
  const isDebugMode = process.env.EPIC_DEBUGGER === 'true';
  
  console.log(`[Babel Dispatcher] Mode: ${isDebugMode ? 'DEBUGGER' : 'TRACER'}`);
  
  const pluginPath = isDebugMode
    ? './debugger/debugger-plugin.cjs'
    : './tracer/tracer-plugin.cjs';
  
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const PluginModule = require(pluginPath);
  
  return PluginModule(api);
};
