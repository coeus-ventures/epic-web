import { logger, sanitizeScope } from '../runtime-shared';

export function __debug_trace(
  file: string,
  line: number,
  funcName: string,
  scopeSnapshot: Record<string, unknown>
) {
  logger.debug({
    plugin: 'debugger',
    file,
    line,
    func: funcName,
    scope: sanitizeScope(scopeSnapshot)
  });
}