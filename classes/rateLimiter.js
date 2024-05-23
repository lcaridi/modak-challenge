class RateLimiter {
  constructor() {
    this.sentNotifications = {};
    this.rateLimits = {
      status: { limit: 2, time: 60 * 1000 }, // 1 minute
      news: { limit: 1, time: 24 * 60 * 60 * 1000 }, // 24 hours
      marketing: { limit: 3, time: 60 * 60 * 1000 }, // 1 hour
      // You can add any other rule here
    };
  }

  canSend(type, userId) {
    const rateLimit = this.rateLimits[type];
    if (!rateLimit) return false;

    const currentTime = Date.now();
    const userKey = `${type}_${userId}`;

    if (!this.sentNotifications[userKey]) {
      this.sentNotifications[userKey] = [];
    }

    // Filter out expired timestamps
    this.sentNotifications[userKey] = this.sentNotifications[userKey].filter(
      timestamp => currentTime - timestamp <= rateLimit.time
    );

    return this.sentNotifications[userKey].length < rateLimit.limit;
  }

  recordSend(type, userId) {
    const userKey = `${type}_${userId}`;
    
    if (!this.sentNotifications[userKey]) {
      this.sentNotifications[userKey] = [];
    }

    this.sentNotifications[userKey].push(Date.now());
  }
}

module.exports = RateLimiter;