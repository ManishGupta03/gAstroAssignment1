const express = require("express");
const clc = require("cli-color");
require("dotenv").config();
const dbConnect = require("./DatabaseConnection/dbConnection");
const AuthRouter = require("./Controller/AuthController");
// const { isAuth } = require("./Middlewares/AuthMiddleware");
const bodyParser = require('body-parser');
const createClientQueue = require('./Queue/queueManager');
const startWorker = require('./Queue/taskWorker');

//creating new express application instance and assign it tp constant variable app
const app = express();


dbConnect();


///middleware which help in parsing the received body object into jsonformat
app.use(bodyParser.json());



const PORT = process.env.PORT || 8805;
app.use(express.json());

app.get("/", (req, res) => {
  return res.send({
    status: 200,
    message: "Server is up an run condition. ",
  });
});




//Define Routes
app.use("/auth", AuthRouter);



// Start Worker
app.post('/enqueue', (req, res) => {
  const { username, task } = req.body;

  // Create or get the queue for the user
  const userQueue = createClientQueue(username);

  // Add the task to the user's queue
  userQueue.add(task);
  startWorker(username);

  res.send('Request enqueued');
});


app.listen(PORT,()=>{console.log(clc.yellowBright(`Server is running on PORT:${PORT}`));});