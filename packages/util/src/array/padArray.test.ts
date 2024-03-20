import {padArray} from './padArray'; // Import the padArray function from your module

describe('padArray function', () => {
  it('should pad the array with the specified pad value at the beginning', () => {
    const arr = [1, 2, 3];
    const padValue = 0;
    const requiredSize = 6;
    const prefix = true;
    const paddedArray = padArray(arr, padValue, requiredSize, prefix);
    expect(paddedArray).toStrictEqual([0, 0, 0, 1, 2, 3]);
  });

  it('should pad the array with the specified pad value at the end', () => {
    const arr = [1, 2, 3];
    const padValue = 0;
    const requiredSize = 6;
    const prefix = false;
    const paddedArray = padArray(arr, padValue, requiredSize, prefix);
    expect(paddedArray).toStrictEqual([1, 2, 3, 0, 0, 0]);
  });

  it('should not pad the array if its length is equal to or greater than the required size', () => {
    const arr = [1, 2, 3];
    const padValue = 0;
    const requiredSize = 3;
    const prefix = true;
    const paddedArray = padArray(arr, padValue, requiredSize, prefix);
    expect(paddedArray).toStrictEqual(arr);
  });

  it('should pad the array with the specified pad value even if the array is empty', () => {
    const arr: number[] = [];
    const padValue = 0;
    const requiredSize = 5;
    const prefix = true;
    const paddedArray = padArray(arr, padValue, requiredSize, prefix);
    expect(paddedArray).toStrictEqual([0, 0, 0, 0, 0]);
  });

  it('should return an empty array if both the array and the pad value are empty', () => {
    const arr: number[] = [];
    const padValue = undefined;
    const requiredSize = 5;
    const prefix = true;
    const paddedArray = padArray(arr, padValue, requiredSize, prefix);
    expect(paddedArray).toStrictEqual([undefined, undefined, undefined, undefined, undefined]);
  });
});
