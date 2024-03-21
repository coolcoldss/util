/**
 * remove first item from tube
 * @param arr
 * @returns first item in array
 * @throws when array empty
 */
export function exitTube<T>(arr: T[]): {data: T; array: T[]} {
  if (arr.length === 0) throw new Error('Tube empty');
  return {data: arr[0] as T, array: arr.slice(1)};
}
