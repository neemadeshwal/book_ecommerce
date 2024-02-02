const {StatusCodes}=require("http-status-codes")
const userModel=require("../models/user")
const userActivity = require("../models/userActivity")
const bookModel=require("../models/books")
const { NotFound } = require("../errors")


const getAllBooksByActivity=async(req,res)=>{
    const {userId}=req.user
    const {activity}=req.params

    const orderedBook=await userActivity.find({userId,activity})
    if(!orderedBook.length){
        throw NotFound("Book not found")
    }

   const bookIds= orderedBook.map((book)=>book.bookId)


    const orderedList=await bookModel.find({_id:{$in:bookIds}})
    res.status(StatusCodes.OK).json({orderedList})
    // const orderedBook=await userModel.find({bookOrdered})

}

const addActivityInDB=async(req,res)=>{
    const {userId}=req.user
    const {bookId,quantity}=req.query
    const {activity}=req.params

   let orderQuantity=0
   let savedQuantity=0
    if (activity==="orders"){
         orderQuantity=quantity
    }
    if(activity==="saved"){
        savedQuantity=quantity
    }
    const bookExist=await userActivity.findOne({userId,bookId})
    
    let addBook;

    if(bookExist){

    
        orderQuantity= orderQuantity?orderQuantity:bookExist.orderQuantity
        savedQuantity=savedQuantity?savedQuantity:bookExist.savedQuantity

        
        

        const existingActivity=bookExist.activity

        const isActivityAlreadyPresent=Array.isArray(existingActivity)?
        existingActivity.includes(activity):false

      

    
        if(!isActivityAlreadyPresent){
            await userActivity.updateOne(
                {_id:bookExist._id},
                {
                    $push:{activity:activity},
                    $set:{
                        orderQuantity,
                        savedQuantity}
                     })
        }
        else {
            await userActivity.updateOne(
               { _id:bookExist._id},
               {$set:{
                orderQuantity,
                savedQuantity
               }}
            )
        }
        
       
          addBook=await userActivity.findOne({_id:bookExist._id})
    }
    else{
        
         addBook=await userActivity.create({
            bookId,
            userId,
            orderQuantity,
            savedQuantity,
            activity
        })
    }
   

    res.status(StatusCodes.OK).json({addBook})
}

module.exports={getAllBooksByActivity,addActivityInDB}