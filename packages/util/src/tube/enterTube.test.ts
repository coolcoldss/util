import {enterTube} from './enterTube';

describe('enterTube', () => {
  it('Should return array', () => {
    const result = enterTube([1, 2, 3], 4, 4);
    expect(result).toStrictEqual([1, 2, 3, 4]);
  });
  it('Should return trim array 1', () => {
    const result = enterTube([1, 2, 3], 4, 3);
    expect(result).toStrictEqual([2, 3, 4]);
  });

  it('Should return trim array 2', () => {
    const result = enterTube([1, 2, 3, 4, 5], 4, 3);
    expect(result).toStrictEqual([4, 5, 4]);
  });
});
