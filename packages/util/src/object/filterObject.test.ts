import {filterObject} from './filterObject';

let data: Record<string, any>;
describe('filterObject', () => {
  beforeEach(() => {
    data = {a: 1, b: 2, c: 3, d: 4, e: 5};
  });

  it('Should filter out data', () => {
    const result = filterObject(data, (_k: string, d: number) => d > 3);
    expect(result).toStrictEqual({d: 4, e: 5});
  });
});
