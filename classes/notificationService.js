const RateLimiter = require('./rateLimiter');

class NotificationService {
  constructor(gateway) {
    this.gateway = gateway;
    this.rateLimiter = new RateLimiter();
  }

  send(type, userId, message) {
    console.log('Trying to send message to user ' + userId + ': ' + message)
    if (this.rateLimiter.canSend(type, userId)) {
      this.gateway.send(userId, message);
      this.rateLimiter.recordSend(type, userId);
    } else {
      console.error("Rate limit exceeded for user " + userId);
    }
  }
}

module.exports = NotificationService;
