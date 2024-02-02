const mongoose=require("mongoose")

const connectDB=require("./db/connect")

const booksModel=require("./models/books")

const bookJsonData=require("./booksData.json")

require("dotenv").config()

const start=async()=>{
    try{
         await connectDB(process.env.MONGO_URI)
         await booksModel.deleteMany()
         await booksModel.create(bookJsonData)
         console.log("Success")
         process.exit(1)
    }
    catch(err){
        console.log(err)
        process.exit(0)
    }
}

start()
