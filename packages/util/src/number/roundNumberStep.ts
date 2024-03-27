/**
 * Round number to certain steps
 * @param num
 * @param step
 * @returns
 */
export function roundNumberStep(num: number, step: number) {
  return Math.round(num / step) * step;
}
