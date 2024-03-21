import {mapPromiseSeries} from './mapPromiseSeries';

describe('mapPromiseSeries function', () => {
  it('should correctly execute functions serially and resolve promises with their returned values', async () => {
    const arr = [
      () => Promise.resolve(1),
      () => Promise.resolve(2),
      () => Promise.resolve(3),
      () => Promise.resolve(4),
      () => Promise.resolve(5),
    ];

    const result = await mapPromiseSeries(arr);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array and return an empty array', async () => {
    const arr: (() => Promise<number>)[] = [];

    const result = await mapPromiseSeries(arr);

    expect(result).toEqual([]);
  });

  it('should correctly handle asynchronous functions', async () => {
    const arr = [
      () => new Promise<number>((resolve) => setTimeout(() => resolve(1), 100)),
      () => new Promise<number>((resolve) => setTimeout(() => resolve(2), 50)),
      () => new Promise<number>((resolve) => setTimeout(() => resolve(3), 150)),
    ];

    const result = await mapPromiseSeries(arr);

    expect(result).toEqual([1, 2, 3]);
  });

  it('should correctly handle functions that return non-promise values', async () => {
    const arr = [() => 1, () => 2, () => 3];

    const result = await mapPromiseSeries(arr);

    expect(result).toEqual([1, 2, 3]);
  });
});
