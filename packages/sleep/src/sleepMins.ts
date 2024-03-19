import {sleepSecs} from './sleepSecs';

/**
 * Sleep function in minutes
 * @param mins parameter in minutes
 * @param upperMins
 * @returns
 */
export function sleepMins(mins: number, upperMins?: number): Promise<void> {
  return sleepSecs(mins * 60, upperMins ? upperMins * 60 : upperMins);
}
