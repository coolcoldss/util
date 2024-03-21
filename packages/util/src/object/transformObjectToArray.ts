/**
 * Convert object to array, preserve name of key in object
 * @param obj
 * @param keyToField
 * @returns
 */
export function transformObjectToArray<T>(obj: Record<string, T>): {
  id: string;
  data: T;
}[] {
  return Object.entries(obj).map(([id, data]) => ({id, data}));
}
