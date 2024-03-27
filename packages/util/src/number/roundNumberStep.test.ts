import {roundNumberStep} from './roundNumberStep'; // Import the roundNumberStep function from your module

describe('roundNumberStep function', () => {
  it('should correctly round the number to the nearest multiple of the step', () => {
    expect(roundNumberStep(12, 5)).toBe(10);
    expect(roundNumberStep(17, 5)).toBe(15);
    expect(roundNumberStep(23, 5)).toBe(25);
    expect(roundNumberStep(38, 10)).toBe(40);
    expect(roundNumberStep(54, 10)).toBe(50);
  });

  it('should correctly round the number to the nearest multiple of the decimal step', () => {
    expect(roundNumberStep(12.4, 0.5)).toBe(12.5);
    expect(roundNumberStep(17.6, 0.5)).toBe(17.5);
    expect(roundNumberStep(23.8, 0.5)).toBe(24);
    expect(roundNumberStep(38.3, 0.1)).toBe(38.3);
    expect(roundNumberStep(54.7, 0.1)).toBe(54.7);
  });

  it('should correctly handle negative numbers', () => {
    expect(roundNumberStep(-12, 5)).toBe(-10);
    expect(roundNumberStep(-17, 5)).toBe(-15);
    expect(roundNumberStep(-23, 5)).toBe(-25);
    expect(roundNumberStep(-38, 10)).toBe(-40);
    expect(roundNumberStep(-54, 10)).toBe(-50);
  });

  it('should correctly handle negative numbers with decimal steps', () => {
    expect(roundNumberStep(-12.4, 0.5)).toBe(-12.5);
    expect(roundNumberStep(-17.6, 0.5)).toBe(-17.5);
    expect(roundNumberStep(-23.8, 0.5)).toBe(-24);
    expect(roundNumberStep(-38.3, 0.1)).toBe(-38.3);
    expect(roundNumberStep(-54.7, 0.1)).toBe(-54.7);
  });

  it('should return the number itself if the step is 1', () => {
    expect(roundNumberStep(12, 1)).toBe(12);
    expect(roundNumberStep(-17, 1)).toBe(-17);
    expect(roundNumberStep(0, 1)).toBe(0);
  });

  it('should return NaN if the step is 0', () => {
    expect(roundNumberStep(12, 0)).toBeNaN();
    expect(roundNumberStep(-17, 0)).toBeNaN();
    expect(roundNumberStep(0, 0)).toBeNaN();
  });
});
