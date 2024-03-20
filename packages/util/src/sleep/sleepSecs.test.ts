import * as ms from './sleepMs';
import {sleepSecs} from './sleepSecs';

const spyMs = jest.spyOn(ms, 'sleepMs');

describe('sleepSecs', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock function call counters before each test
  });

  it('should call sleepSecs with correct arguments when upperSecs is not provided', async () => {
    const secs = 5; // Example seconds

    await sleepSecs(secs);

    expect(spyMs).toHaveBeenCalledTimes(1);
    expect(spyMs).toHaveBeenCalledWith(secs * 1000, undefined);
  }, 10000);

  it('should call sleepSecs with correct arguments when upperSecs is provided', async () => {
    const secs = 5; // Example seconds
    const upperSecs = 10; // Example upper seconds

    await sleepSecs(secs, upperSecs);

    expect(spyMs).toHaveBeenCalledTimes(1);
    expect(spyMs).toHaveBeenCalledWith(secs * 1000, upperSecs * 1000);
  }, 15000);
});
