/**
 * Util to run a function that can potentially throw. This will catch and return a default value instead
 * @param fn
 * @param defaultValue
 * @returns
 */
export function runSafe<Output>(
  fn: () => Output,
  defaultValue?: Output,
  errorHandler?: (e: any) => void,
): Output | undefined {
  try {
    return fn();
  } catch (e) {
    if (errorHandler) errorHandler(e);
    return defaultValue;
  }
}
