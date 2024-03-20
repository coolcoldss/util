import {filterArrayUndefined} from './filterArrayUndefined'; // Import the filterArrayUndefined function from your module

describe('filterArrayUndefined function', () => {
  it('should filter out undefined values from the array', () => {
    const inputArray = [1, undefined, 2, undefined, 3, undefined];
    const filteredArray = filterArrayUndefined(inputArray);
    expect(filteredArray).toEqual([1, 2, 3]);
  });

  it('should return an empty array if all elements are undefined', () => {
    const inputArray: (number | undefined)[] = [undefined, undefined, undefined];
    const filteredArray = filterArrayUndefined(inputArray);
    expect(filteredArray).toEqual([]);
  });

  it('should not modify the original array', () => {
    const inputArray = [1, undefined, 2, undefined, 3, undefined];
    filterArrayUndefined(inputArray);
    expect(inputArray).toEqual([1, undefined, 2, undefined, 3, undefined]);
  });

  it('should preserve non-undefined elements in the array', () => {
    const inputArray = [undefined, 'hello', undefined, 'world', undefined];
    const filteredArray = filterArrayUndefined(inputArray);
    expect(filteredArray).toEqual(['hello', 'world']);
  });

  it('should preserve the order of elements in the array', () => {
    const inputArray = [1, undefined, 2, undefined, 3];
    const filteredArray = filterArrayUndefined(inputArray);
    expect(filteredArray).toEqual([1, 2, 3]);
  });

  it('should handle arrays with no undefined elements', () => {
    const inputArray = [1, 2, 3];
    const filteredArray = filterArrayUndefined(inputArray);
    expect(filteredArray).toEqual([1, 2, 3]);
  });

  it('should handle an empty input array', () => {
    const inputArray: (number | undefined)[] = [];
    const filteredArray = filterArrayUndefined(inputArray);
    expect(filteredArray).toEqual([]);
  });
});
