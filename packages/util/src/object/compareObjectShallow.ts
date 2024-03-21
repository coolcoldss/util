/**
 * Perform shallow compare of two object
 * @param obj1
 * @param obj2
 * @returns true when they match, false otherwise
 */
export function compareObjectShallow<T extends Record<PropertyKey, any>>(obj1: T, obj2: T) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  return !Object.keys(obj1).some((k) => obj1[k] !== obj2[k]);
}
