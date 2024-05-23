const Gateway = require('../gateway.js');

describe('Gateway', () => {
  let gateway;
  let consoleSpy;

  beforeEach(() => {
    gateway = new Gateway();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should print message when sending', () => {
    gateway.send('user5', 'Hello, World!');
    expect(console.log).toHaveBeenCalledWith('Sending message to user user5: Hello, World!');
  });
});
