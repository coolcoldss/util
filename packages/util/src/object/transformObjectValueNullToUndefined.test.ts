import {transformObjectValueNullToUndefined} from './transformObjectValueNullToUndefined';

let data: Record<string, any>;

describe('transformObjectValueNullToUndefined', () => {
  beforeEach(() => {
    data = {a: 1, b: undefined, c: '3', d: undefined, e: null};
  });

  it('Should return object with undefine instead', () => {
    const result = transformObjectValueNullToUndefined(data);
    expect(result).toStrictEqual({...data, e: undefined});
  });
});
