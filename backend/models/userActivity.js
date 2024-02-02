const mongoose=require("mongoose")


const userActivitySchema=new mongoose.Schema({
 
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'books',
        required:[true,"Please provide bookid to refer to"]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    orderQuantity:{
        type:Number,
        default:1
    },
    savedQuantity:{
        type:Number,
        default:1
    },
    
    activity:{
        type:[String],
        enum:["saved","wishlist","orders"]

    }

})



const userActivity=mongoose.model("userActivity",userActivitySchema)


module.exports=userActivity