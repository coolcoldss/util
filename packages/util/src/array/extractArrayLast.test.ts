import {extractArrayLast} from './extractArrayLast'; // Import the extractArrayLast function from your module

describe('extractArrayLast', () => {
  it('should return the last item in the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const lastItem = extractArrayLast(arr);
    expect(lastItem).toBe(5);
  });

  it('should throw an error if the array is empty', () => {
    const arr: number[] = [];
    expect(() => extractArrayLast(arr)).toThrow('Cannot use last in empty array');
  });

  it('should return the last item in the array even if it is a string', () => {
    const arr = ['apple', 'banana', 'orange'];
    const lastItem = extractArrayLast(arr);
    expect(lastItem).toBe('orange');
  });

  it('should return the last item in the array even if it is an object', () => {
    const arr = [{name: 'John'}, {name: 'Alice'}, {name: 'Bob'}];
    const lastItem = extractArrayLast(arr);
    expect(lastItem).toEqual({name: 'Bob'});
  });

  it('should return the last item in the array even if it is undefined', () => {
    const arr = [undefined, undefined, undefined, 'last'];
    const lastItem = extractArrayLast(arr);
    expect(lastItem).toBe('last');
  });

  it('should return the last item in the array even if it is null', () => {
    const arr = [null, null, null, 'last'];
    const lastItem = extractArrayLast(arr);
    expect(lastItem).toBe('last');
  });

  it('should return the last item in the array even if it is a boolean', () => {
    const arr = [false, true, true, false];
    const lastItem = extractArrayLast(arr);
    expect(lastItem).toBe(false);
  });
});
