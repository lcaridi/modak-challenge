class Gateway {
  send(userId, message) {
    console.log("Sending message to user " + userId + ": " + message);
  }
}

module.exports = Gateway;
