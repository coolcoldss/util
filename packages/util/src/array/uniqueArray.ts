/**
 * Remove duplicate in array
 * @param arr
 * @returns
 */
export function uniqueArray<T>(arr: T[]) {
  return [...new Set(arr)];
}
