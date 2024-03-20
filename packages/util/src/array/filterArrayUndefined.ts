/**
 * Filter data where it is array of T and undefined to remove all undefined and fix typings
 * @param data
 * @returns
 */
export function filterArrayUndefined<T>(data: (T | undefined)[]) {
  return data.filter((d) => d !== undefined) as T[];
}
