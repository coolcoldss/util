import {sleepMins} from './sleepMins';
import * as ms from './sleepMs';

const spyMs = jest.spyOn(ms, 'sleepMs');

describe('sleepMins', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock function call counters before each test
  });

  it('should call sleepMins with correct arguments when upperSecs is not provided', async () => {
    const secs = 0.1; // Example seconds

    await sleepMins(secs);

    expect(spyMs).toHaveBeenCalledTimes(1);
    expect(spyMs).toHaveBeenCalledWith(secs * 60000, undefined);
  }, 10000);

  it('should call sleepMins with correct arguments when upperSecs is provided', async () => {
    const secs = 0.1; // Example seconds
    const upperSecs = 0.2; // Example upper seconds

    await sleepMins(secs, upperSecs);

    expect(spyMs).toHaveBeenCalledTimes(1);
    expect(spyMs).toHaveBeenCalledWith(secs * 60000, upperSecs * 60000);
  }, 15000);
});
