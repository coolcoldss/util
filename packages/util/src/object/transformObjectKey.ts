/**
 * execute function in all key in record
 * @param rec
 * @param fn
 * @returns
 */
export function transformObjectKey<T>(rec: Record<string, T>, fn: (d: string) => string): Record<string, T> {
  const data = Object.entries(rec);
  const result: [string, T][] = data.map(([key, val]) => [fn(key), val]);
  return Object.fromEntries(result);
}
