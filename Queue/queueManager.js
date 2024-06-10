const Queue = require('bull');

const createClientQueue = (username) => {
  return new Queue(`queue:${username}`, {
    redis: {
      host: '127.0.0.1',
      port: 6379,
    },
  });
};

module.exports = createClientQueue;