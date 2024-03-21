/**
 * Closure function to build delay run function
 * @returns
 */
function buildDelayRun() {
  let timeout: NodeJS.Timeout | undefined;

  return <T>(fn: () => Promise<T> | T, delayMs = 1000) => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }
    timeout = setTimeout(fn, delayMs);
  };
}

/**
 * Execute a function at a given delay, stop previous one if there is one scheduled to run
 * @returns
 */
export const runDelay = buildDelayRun();
