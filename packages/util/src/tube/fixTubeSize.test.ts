import {fixTubeSize} from './fixTubeSize'; // Import the fixTubeSize function from your module

describe('fixTubeSize function', () => {
  it('should return the original tube if its length is less than or equal to the maximum size', () => {
    const tube = [1, 2, 3];
    const maxSize = 5;
    const result = fixTubeSize(tube, maxSize);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return a tube with the last elements if its length exceeds the maximum size', () => {
    const tube = [1, 2, 3, 4, 5, 6];
    const maxSize = 4;
    const result = fixTubeSize(tube, maxSize);
    expect(result).toEqual([3, 4, 5, 6]);
  });

  it('should return an empty tube if the maximum size is 0', () => {
    const tube = [1, 2, 3];
    const maxSize = 0;
    const result = fixTubeSize(tube, maxSize);
    expect(result).toEqual([]);
  });

  it('should handle an empty tube', () => {
    const tube: number[] = [];
    const maxSize = 5;
    const result = fixTubeSize(tube, maxSize);
    expect(result).toEqual([]);
  });

  it('should handle the case when the maximum size is negative', () => {
    const tube = [1, 2, 3];
    const maxSize = -2;
    expect(() => fixTubeSize(tube, maxSize)).toThrow('maxSize have to be >= 0');
  });

  it('should handle the case when the tube is larger than the maximum size', () => {
    const tube = [1, 2, 3];
    const maxSize = 1;
    const result = fixTubeSize(tube, maxSize);
    expect(result).toEqual([3]);
  });
});
