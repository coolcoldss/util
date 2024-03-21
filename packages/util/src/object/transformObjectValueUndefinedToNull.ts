import {transformObjectValue} from './transformObjectValue';

/**
 * convert null to undefined
 * @param obj
 * @returns
 */
export function transformObjectValueUndefinedToNull(obj: Record<string, any>) {
  return transformObjectValue(obj, (v) => (v === undefined ? null : v));
}
