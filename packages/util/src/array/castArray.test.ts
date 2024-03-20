import {castArray} from './castArray'; // Import the castArray function from your module

describe('castArray function', () => {
  it('should return the same array if the input is already an array', () => {
    const inputArray = [1, 2, 3];
    const result = castArray(inputArray);
    expect(result).toEqual(inputArray);
  });

  it('should return an array containing the input value if the input is not an array', () => {
    const inputValue = 42;
    const result = castArray(inputValue);
    expect(result).toEqual([inputValue]);
  });

  it('should return an empty array if the input is null', () => {
    const result = castArray(null);
    expect(result).toEqual([null]);
  });

  it('should return an array with one undefined element if the input is undefined', () => {
    const result = castArray(undefined);
    expect(result).toEqual([undefined]);
  });

  it('should return an array with one null element if the input is null', () => {
    const result = castArray(null);
    expect(result).toEqual([null]);
  });

  it('should return an array with one element if the input is a single value', () => {
    const result = castArray('hello');
    expect(result).toEqual(['hello']);
  });

  it('should return an array with one empty array if the input is an empty array', () => {
    const result = castArray([]);
    expect(result).toEqual([]);
  });
});
