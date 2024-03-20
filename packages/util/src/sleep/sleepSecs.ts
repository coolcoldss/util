import {sleepMs} from './sleepMs';

/**
 * Sleep function in seconds
 * @param secs parameter in seconds
 * @param upperSecs
 * @returns
 */
export function sleepSecs(secs: number, upperSecs?: number): Promise<void> {
  return sleepMs(secs * 1000, upperSecs ? upperSecs * 1000 : upperSecs);
}
