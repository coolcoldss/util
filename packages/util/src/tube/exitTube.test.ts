import {exitTube} from './exitTube'; // Import the exitTube function from your module

describe('exitTube function', () => {
  it('should extract the first element from the array and return it along with the updated array', () => {
    const arr = [1, 2, 3];
    const result = exitTube(arr);
    expect(result.data).toBe(1);
    expect(result.array).toEqual([2, 3]);
  });

  it('should throw an error if the array is empty', () => {
    const arr: number[] = [];
    expect(() => exitTube(arr)).toThrow('Tube empty');
  });

  it('should handle an array with a single element', () => {
    const arr = [5];
    const result = exitTube(arr);
    expect(result.data).toBe(5);
    expect(result.array).toEqual([]);
  });

  it('should handle an array of strings', () => {
    const arr = ['apple', 'banana', 'orange'];
    const result = exitTube(arr);
    expect(result.data).toBe('apple');
    expect(result.array).toEqual(['banana', 'orange']);
  });

  it('should handle an array of objects', () => {
    const arr = [{name: 'John'}, {name: 'Alice'}, {name: 'Bob'}];
    const result = exitTube(arr);
    expect(result.data).toEqual({name: 'John'});
    expect(result.array).toEqual([{name: 'Alice'}, {name: 'Bob'}]);
  });
});
