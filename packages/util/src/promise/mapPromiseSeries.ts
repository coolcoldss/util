/**
 * Run an array of async function in series
 * @param arr array of function to run
 * @returns
 */
export async function mapPromiseSeries<T>(arr: (() => T | Promise<T>)[]): Promise<T[]> {
  const result: T[] = [];
  /* eslint-disable no-restricted-syntax */
  for (const fn of arr) {
    /* eslint-disable no-await-in-loop */
    result.push(await fn());
  }
  return result;
}
