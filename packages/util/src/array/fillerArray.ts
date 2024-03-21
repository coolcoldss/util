/**
 * create an array of given length with given value, or generate one along the way
 * @returns array of given length with given value
 */
export function fillerArray<T>(padValue: T | ((index: number) => T), requiredSize: number): T[] {
  const rtn = new Array(requiredSize).fill(padValue);

  if (typeof padValue === 'function') {
    return rtn.map((fn: (i: number) => T, i) => fn(i));
  }
  return rtn;
}
