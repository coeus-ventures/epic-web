import { logger, sanitizeScope } from '../runtime-shared';

export function __debug_trace(
  file: string,
  line: number,
  funcName: string,
  scopeSnapshot: Record<string, unknown>
) {
  logger.debug({
    type: 'DEBUG',
    file,
    line,
    func: funcName,
    scope: sanitizeScope(scopeSnapshot)
  });
}