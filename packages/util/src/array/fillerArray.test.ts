import {fillerArray} from './fillerArray'; // Import the fillerArray function from your module

describe('fillerArray function', () => {
  it('should return an array filled with the specified padValue', () => {
    const padValue = 0;
    const requiredSize = 5;
    const filledArray = fillerArray(padValue, requiredSize);
    expect(filledArray).toEqual([0, 0, 0, 0, 0]);
  });

  it('should return an empty array when requiredSize is 0', () => {
    const padValue = 'a';
    const requiredSize = 0;
    const filledArray = fillerArray(padValue, requiredSize);
    expect(filledArray).toEqual([]);
  });

  it('should return an array filled with the specified object', () => {
    const padValue = {name: 'John', age: 30};
    const requiredSize = 3;
    const filledArray = fillerArray(padValue, requiredSize);
    expect(filledArray).toEqual([
      {name: 'John', age: 30},
      {name: 'John', age: 30},
      {name: 'John', age: 30},
    ]);
  });

  it('should return an array filled with undefined if padValue is not provided', () => {
    const requiredSize = 4;
    const filledArray = fillerArray(undefined, requiredSize);
    expect(filledArray).toEqual([undefined, undefined, undefined, undefined]);
  });

  it('should return an array filled with null if padValue is null', () => {
    const padValue = null;
    const requiredSize = 3;
    const filledArray = fillerArray(padValue, requiredSize);
    expect(filledArray).toEqual([null, null, null]);
  });

  it('should return an array filled with the specified value even if it is a string', () => {
    const padValue = 'hello';
    const requiredSize = 2;
    const filledArray = fillerArray(padValue, requiredSize);
    expect(filledArray).toEqual(['hello', 'hello']);
  });
});
