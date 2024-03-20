/**
 * Get last item in array
 * @param arr
 * @returns
 */
export function extractArrayLast<T>(arr: T[]) {
  if (arr.length === 0) throw new Error('Cannot use last in empty array');
  return arr.at(-1) as T;
}
