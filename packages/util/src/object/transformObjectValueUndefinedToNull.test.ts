import {transformObjectValueUndefinedToNull} from './transformObjectValueUndefinedToNull';

let data: Record<string, any>;

describe('transformObjectValueUndefinedToNull', () => {
  beforeEach(() => {
    data = {a: 1, b: undefined, c: '3', d: undefined, e: null};
  });

  it('Should return object with undefine instead', () => {
    const result = transformObjectValueUndefinedToNull(data);
    expect(result).toStrictEqual({...data, b: null, d: null});
  });
});
