const { StatusCodes } = require("http-status-codes")
const userModel=require("../models/user")

const {Unauthenticated,NotFound,BadRequestError,CustomApiError}=require("../errors/index")

const register=async(req,res)=>{
    
    const user=await userModel.create({...req.body})

    const token=user.createJwt()

    res.status(StatusCodes.CREATED).json({user:{name:req.body.name},token,password:user.password})


}

const login=async(req,res)=>{

    const {email,password}=req.body

    if(!email||!password){
        throw new BadRequestError("Please provide email and password")
    }

    const user=await userModel.findOne({email})

    if(!user){
         throw new Unauthenticated("Invalid credentials")
    }
    const verify=await user.checkPassword(password)
    console.log(verify)
    if(!verify){
         throw new Unauthenticated("Invalid credentials")
    }

    const token=user.createJwt()

    res.status(StatusCodes.OK).json({user:{name:user.name},token})


}

module.exports={register,login}