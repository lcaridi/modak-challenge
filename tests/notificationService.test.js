const NotificationService = require('../notificationService.js');
const Gateway = require('../gateway.js');

jest.mock('../gateway.js'); // Mock the Gateway class

describe('NotificationService', () => {
  let notificationService;
  let mockGateway;

  beforeEach(() => {
    mockGateway = new Gateway();
    notificationService = new NotificationService(mockGateway);
    mockGateway.send.mockClear();
  });

  test('should send message when rate limit is not exceeded', () => {
    jest.spyOn(notificationService.rateLimiter, 'canSend').mockReturnValue(true);
    notificationService.send('news', 'user3', 'news message');
    expect(mockGateway.send).toHaveBeenCalledWith('user3', 'news message');
  });

  test('should not send message when rate limit is exceeded', () => {
    jest.spyOn(notificationService.rateLimiter, 'canSend').mockReturnValue(false);
    notificationService.send('news', 'user4', 'news message');
    expect(mockGateway.send).not.toHaveBeenCalled();
  });
});
