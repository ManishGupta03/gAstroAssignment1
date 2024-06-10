require('dotenv').config();

const jwt=require("jsonwebtoken")
const secret = process.env.JWT_SECRET

function generateToken(user){
    const payload={
        id:user._id,
        name:user.name,
        email:user.email,
        
    }
    const token=jwt.sign(payload,secret,{ expiresIn: '1h' })
    return token
}

function getUserfromtoken(token){
    const payload=jwt.verify(token,secret)
    return payload
}


module.exports={ generateToken,getUserfromtoken}