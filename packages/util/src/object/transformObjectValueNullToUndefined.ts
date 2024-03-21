/**
 * convert null to undefined
 * @param obj
 * @returns
 */
export function transformObjectValueNullToUndefined(obj: Record<string, any>) {
  return Object.keys(obj).reduce(
    (prev: Record<string, any>, cur: string) => ({
      ...prev,
      [cur]: obj[cur] === null ? undefined : obj[cur],
    }),
    {} as Record<string, any>,
  );
}
