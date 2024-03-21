/**
 * Apply filter to object like array.filter
 * @param obj
 * @param filter
 * @returns
 */
export function filterObject<T>(obj: Record<string, T>, filter: (key: string, data: T) => boolean) {
  const value = Object.entries(obj);

  // apply filter
  const remainingData = value.filter((v) => filter(v[0], v[1]));

  return Object.fromEntries(remainingData);
}
