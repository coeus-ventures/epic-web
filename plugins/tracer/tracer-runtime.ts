import { logger, sanitizeScope } from '../runtime-shared';

export function __trace(name: string, args: Record<string, unknown>, stack: string, sourceFile: string) {
  // Extract caller from runtime stack (second frame)
  const stackLines = stack.split('\n');
  let caller = 'root';
  for (const line of stackLines) {
    if (line.includes('node_modules')) continue;
    if (line.includes('node:internal')) continue;
    const match = line.match(/at\s+(?:(.+?)\s+\()?/);
    if (match && match[1]) {
      caller = match[1];
      break;
    }
  }
  
  // Extract just the filename from source path
  const filename = sourceFile.split(/[/\\]/).pop() || sourceFile;

  logger.trace({
    plugin: 'tracer',
    file: filename,
    func: name,
    caller: caller,
    args: sanitizeScope(args)
  });
}