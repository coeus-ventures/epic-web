import { logger, sanitizeScope } from '../runtime-shared';

interface StackFrame {
  func: string;
  file: string;
  line: number;
}

function parseStack(stack: string): StackFrame[] {
  const frames: StackFrame[] = [];
  
  stack.split('\n').forEach((line) => {
    if (line.includes('node_modules')) return;
    if (line.includes('node:internal')) return;
    
    const match = line.match(/at\s+(?:(.+?)\s+\()?(?:(.+?):(\d+)(?::\d+)?)\)?/);
    if (!match) return;
    
    const funcName = match[1] || '<anonymous>';
    const filePath = match[2];
    const lineNum = parseInt(match[3], 10);

    frames.push({
      func: funcName,
      file: filePath.split(/[/\\]/).pop() || filePath, // Apenas nome do arquivo
      line: lineNum
    });
  });
  
  return frames;
}

export function __trace(name: string, args: Record<string, unknown>, stack: string) {
  const frames = parseStack(stack);
  const caller = frames[1]?.func || 'root';

  logger.trace({
    type: 'TRACE',
    func: name,
    caller: caller,
    args: sanitizeScope(args),
    stack: frames
  });
}