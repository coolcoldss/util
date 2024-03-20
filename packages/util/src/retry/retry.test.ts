import {retry, RetryOptions} from './retry'; // Import the retry function from your module

describe('retry', () => {
  it('should execute the function once if successful', async () => {
    const fn = jest.fn().mockResolvedValue('success');
    const result = await retry(fn);

    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should retry the function until successful', async () => {
    const fn = jest
      .fn()
      .mockRejectedValueOnce(new Error('Error 1'))
      .mockRejectedValueOnce(new Error('Error 2'))
      .mockResolvedValueOnce('success');

    const options: RetryOptions = {
      numberOfTries: 3,
      delay: jest.fn().mockResolvedValue(undefined),
    };

    const result = await retry(fn, options);

    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('should throw the last error if retries are exhausted', async () => {
    const fn = jest.fn().mockRejectedValue(new Error('Error'));

    const options: RetryOptions = {
      numberOfTries: 3,
      delay: jest.fn().mockResolvedValue(undefined),
    };

    await expect(retry(fn, options)).rejects.toThrow('Error');
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('should execute the function once if shouldRetry condition is false', async () => {
    const fn = jest.fn().mockRejectedValue(new Error('Error'));

    const options: RetryOptions = {
      shouldRetry: (_error) => false,
    };

    await expect(retry(fn, options)).rejects.toThrow('Error');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should execute the delay function if provided', async () => {
    const fn = jest
      .fn()
      .mockRejectedValueOnce(new Error('Error 1'))
      .mockRejectedValueOnce(new Error('Error 2'))
      .mockResolvedValueOnce('success');

    const delay = jest.fn().mockResolvedValue(undefined);

    const options: RetryOptions = {
      numberOfTries: 3,
      delay,
    };

    await retry(fn, options);

    expect(delay).toHaveBeenCalledTimes(2);
  });
});
