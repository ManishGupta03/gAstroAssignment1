const mongoose = require("mongoose");
const clc = require("cli-color");
require('dotenv').config();

const dbConnect = async ()=>{
  try{  
    await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true,useUnifiedTopology: true, }); 
    console.log(clc.yellowBright("MongoDb connected successfully"));
  }
  catch(err){
    console.log(clc.redBright(err));
  };
};

module.exports = dbConnect;