const express=require("express")

require("dotenv").config()

const connectDB=require("./db/connect")
const bookRouter = require("./routes/books")
const authRouter=require("./routes/user")
const activityRouter=require("./routes/userActivity")
const app=express()
const authMiddleware=require("./middleware/authentication")
const cors=require("cors")


app.use(express.static("assets"))
app.use(express.json())
app.use(cors())
app.use("/api/v1/books",bookRouter)
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/user",authMiddleware,activityRouter)

const PORT=process.env.PORT

const URL=process.env.MONGO_URI


const start=async()=>{
    try{
        await connectDB(URL)
        app.listen(PORT,()=>{
            console.log(`server is listening on port ${PORT}.....`)
        })
    }
    catch(err){
        console.log(err)
    }
}

start()