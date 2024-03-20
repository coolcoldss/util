export interface RetryOptions {
  /** number of times to try */
  numberOfTries?: number;
  /** function to delay before retry */
  delay?: () => Promise<void> | void;
  /** can fail and throw error early */
  shouldRetry?: (error: any) => boolean;
}

/**
 * Retry a function
 * @returns
 */
export async function retry<Return>(fn: () => Return | Promise<Return>, options: RetryOptions = {}) {
  const {delay, shouldRetry, numberOfTries = 3} = options;

  for (let i = 1; i < numberOfTries; i += 1) {
    try {
      // eslint-disable-next-line no-await-in-loop
      return await fn();
    } catch (e) {
      // can decide to retry or not
      if (shouldRetry && !shouldRetry(e)) throw e;

      // eslint-disable-next-line no-await-in-loop
      if (delay) await delay();
    }
  }

  // make sure it throws within the function
  const result = await fn();
  return result;
}
