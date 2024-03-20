/**
 *
 * @returns array of given length with given value
 */
export function fillerArray<T>(padValue: T, requiredSize: number): T[] {
  return new Array(requiredSize).fill(padValue);
}
