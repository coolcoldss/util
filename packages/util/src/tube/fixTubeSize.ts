/**
 * Fix the size of array/tube
 * @param tube
 * @param maxSize
 * @returns
 */
export function fixTubeSize<T>(tube: T[], maxSize: number): T[] {
  if (maxSize < 0) throw new Error('maxSize have to be >= 0');
  if (tube.length <= maxSize) return tube;
  return tube.slice(tube.length - maxSize);
}
