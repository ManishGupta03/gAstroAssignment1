const createClientQueue = require('../Queue/queueManager');

// Function to process the task
const processTask = async (task) => {
  console.log(`Processing job ${task.id} with data: `, task.data);
  // Implement your task processing logic here
};

const startWorker = (username) => {
  const userQueue = createClientQueue(username);

  userQueue.process(async (task) => {
    await processTask(task);
  });
};

module.exports = startWorker;