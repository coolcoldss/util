/**
 * execute function in all values in record
 * @param rec
 * @param fn
 * @returns
 */
export function transformObjectValue<T, U>(rec: Record<string, T>, fn: (d: T) => U): Record<string, U> {
  const data = Object.entries(rec);
  const result: [string, U][] = data.map(([key, val]) => [key, fn(val)]);
  return Object.fromEntries(result);
}
