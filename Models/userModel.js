const mongoose=require("mongoose")
const bcrypt = require('bcrypt');
require('dotenv').config();

const userSchema=new mongoose.Schema({
    name:{ type:String, required:true },
    email:{type:String, required:true, unique:true},
    username: {type: String, required: true, unique: true },
    password:{type:String, required:true }
})

//Hashing the Password
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){ return next(); }
    try {
    this.password=await bcrypt.hash(this.password,process.env.SALT)
    next();
    }catch (error) {
        next(error);
      }

})
//Comparing the Password
userSchema.methods.comparePassword=async function(enteredPassword){
   return await bcrypt.compare(enteredPassword,this.password)
}

module.exports = mongoose.model('User', userSchema);