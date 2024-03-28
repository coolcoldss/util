import {mapPromiseSeries} from './mapPromiseSeries';

/**
 * run function provided in data array in series
 * @param arr
 * @param fn
 * @returns
 */
export function mapPromiseFnSeries<T, R>(arr: T[], fn: (data: T) => Promise<R> | R): Promise<R[]> {
  return mapPromiseSeries(arr.map((d) => () => fn(d)));
}
