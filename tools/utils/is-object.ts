export const isObject = (input: unknown): input is Record<string, unknown> => 
  !!input && input instanceof Object && !Array.isArray(input);
