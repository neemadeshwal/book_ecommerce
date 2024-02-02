const mongoose=require("mongoose")
require("dotenv").config()

const bcrypt=require("bcryptjs")
const jwttokens=require("jsonwebtoken")

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide your name."],
        minlength:3,
        maxlength:50
    },
    email:{
        type:String,
        required:[true,"Please provide your email address."],
        match:[
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email"],
      unique:true
    },
    password:{
        type:String,
        required:[true,"Please provide password"],
        minlength:6,
        match:[
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Please provide the required password pattern"

        ]
    },
    bookOrdered:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"books",

    },
    bookSaved:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"books"
    },
    bookWishlisted:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"books"
    }
    

})

UserSchema.pre("save",async function (next){
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
    next()
})

UserSchema.methods.createJwt= function (){
   return jwttokens.sign({userId:this._id,name:this.name},process.env.JWT_SECRET,
        {expiresIn:process.env.EXPIRED_TIME})
}

UserSchema.methods.checkPassword=async function (candidatePass){
    console.log(candidatePass)
    console.log(this.password)
    const result= await bcrypt.compare(candidatePass,this.password)
    return result
    }

const user=mongoose.model("User",UserSchema)

module.exports=user