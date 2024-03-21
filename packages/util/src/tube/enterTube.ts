import {fixTubeSize} from './fixTubeSize';

/**
 * append data to tube
 * returns a new tube
 * @param arr
 * @param val
 * @param maxSize
 * @returns
 */
export function enterTube<T>(arr: T[], val: T, maxSize: number) {
  return fixTubeSize([...arr, val], maxSize);
}
