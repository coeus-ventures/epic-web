import pino from 'pino';

export const logger = pino({
  level: 'trace', // Enable all levels (trace=10, debug=20, etc.)
  browser: {
    asObject: true,
    serialize: true,
  },
  base: null, // Remove pid e hostname (ruído)
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    level: (_label, number) => ({ level: number }),
  },
});

export function sanitizeValue(value: unknown, depth = 0): unknown {
  if (depth > 2) return '[Max Depth Reached]';

  try {
    if (value === undefined) return 'undefined';
    if (value === null) return 'null';
    
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      return value;
    }

    if (typeof value === 'function') {
      return `[Function: ${value.name || 'anonymous'}]`;
    }

    if (value instanceof Error) {
        return { message: value.message, stack: value.stack };
    }

    if (typeof HTMLElement !== 'undefined' && value instanceof HTMLElement) {
      return `[HTMLElement: ${value.tagName.toLowerCase()}${value.id ? `#${value.id}` : ''}]`;
    }
    
    if (typeof FormData !== 'undefined' && value instanceof FormData) {
      const formObj: Record<string, unknown> = {};
      value.forEach((v, k) => { formObj[k] = v; });
      return { '[FormData]': formObj };
    }

    if (Array.isArray(value)) {
        return value.map(item => sanitizeValue(item, depth + 1));
    }

    if (typeof value === 'object') {
      const result: Record<string, unknown> = {};
      
      if (Object.keys(value).length > 100) return '[Large Object]';

      for (const [k, v] of Object.entries(value)) {
        result[k] = sanitizeValue(v, depth + 1);
      }
      return result;
    }

    return String(value);

  } catch {
    return '[Circular/Unserializable]';
  }
}

export function sanitizeScope(args: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(args)) {
    result[key] = sanitizeValue(value);
  }
  return result;
}