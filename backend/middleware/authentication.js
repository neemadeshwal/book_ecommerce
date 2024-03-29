const user=require("../models/user")

const jwt=require("jsonwebtoken")

const {Unauthenticated}=require("../errors")

require("dotenv").config()

const auth=async(req,res,next)=>{
    const authHeaders=req.headers.authorization

    if(!authHeaders ||!authHeaders.startsWith("Bearer")){
        throw Unauthenticated("authentication Error")
    }

    const token =authHeaders.split(" ")[1]

    try{
       const payload=jwt.verify(token,process.env.JWT_SECRET)

       req.user={userId:payload.userId,name:payload.name}

       next()

    }
    catch(err){
        throw new Unauthenticated("an error occured")
    }

}

module.exports=auth