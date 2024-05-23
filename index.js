const Gateway = require('./classes/gateway');
const NotificationService = require('./classes/notificationService');

const gateway = new Gateway();
const notificationService = new NotificationService(gateway);

// Test the notification service with various notifications
notificationService.send("news", "user1", "news 1");
notificationService.send("news", "user1", "news 2");
notificationService.send("news", "user1", "news 3");
notificationService.send("news", "user2", "news 1");
notificationService.send("status", "user1", "status 1");
notificationService.send("status", "user1", "status 2");
notificationService.send("status", "user1", "status 3");
