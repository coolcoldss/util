/**
 * Makes sure data is an array, convert if required
 * @param data
 * @returns
 */
export function castArray<T>(data: T | T[]): T[] {
  return Array.isArray(data) ? data : [data];
}
