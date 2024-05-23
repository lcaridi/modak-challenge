const RateLimiter = require('../rateLimiter.js');

describe('RateLimiter', () => {
  let rateLimiter;

  beforeEach(() => {
    rateLimiter = new RateLimiter();
  });

  test('should allow sending initial message', () => {
    expect(rateLimiter.canSend('news', 'user1')).toBe(true);
  });

  test('should prevent sending when limit is exceeded', () => {
    rateLimiter.recordSend('news', 'user1');
    rateLimiter.recordSend('news', 'user1'); // Assuming limit is 1 per day
    expect(rateLimiter.canSend('news', 'user1')).toBe(false);
  });

  test('should allow sending after time expires', () => {
    jest.useFakeTimers();
    rateLimiter.recordSend('status', 'user2');
    jest.advanceTimersByTime(61000); // Advance time by just over one minute
    expect(rateLimiter.canSend('status', 'user2')).toBe(true);
    jest.useRealTimers();
  });
});