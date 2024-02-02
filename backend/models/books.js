const mongoose=require("mongoose")

const bookSchema=new mongoose.Schema({
    bookName:{
        type:String,
        required:[true,"book name is required "],
        additionalInfo: mongoose.Schema.Types.Mixed
    },
    price:{
        type:Number,String,
        required:[true,"book price is required"],
        additionalInfo: mongoose.Schema.Types.Mixed
                
    },
    genre:{
        type:String,
        
    },
    featured:{
        type:Boolean,
        
    },
    bestseller:{
        type:Boolean
    },
    ratings:{
        type:Number
    },
    author:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    languageAvailable:{
        type:String,
        enum:["English","Hindi","telugu","French","Spanish"]

    },
    shippingDate:{
        type:Date,
        default:Date.now()
    },
    newArrival:{
        type:Boolean
    },
    ebooksAvailable:{
        type:Boolean,
        default:false
    },
    audioBooksAvailable:{
        type:Boolean,
        default:false
    },
    discount:{
        type:Number,
        
    },
    reviews:[{
        username:{type:String},
        rating:{type:Number},
        Comment:{type:String}

}],
formats:[{
    paperback:{price:{type:Number}},
    hardcover:{price:{type:Number}},
    ebook:{price:{type:Number}}
}],
publishedDate:{type:String},
createdBy:{type:Date,value:Date()},


},
{timestamps:true})

const book=mongoose.model("Books",bookSchema)

module.exports=book