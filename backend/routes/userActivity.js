const express=require("express")
const router=express.Router()

const {getAllBooksByActivity,addActivityInDB}=require("../controllers/userActivity")

router.route("/:activity").get(getAllBooksByActivity).post(addActivityInDB)



module.exports=router