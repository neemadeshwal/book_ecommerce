const express=require("express")
const {getAllBooks,getFeaturedBooks,getSingleBook} = require("../controllers/books")


const router=express.Router()

router.route("/").get(getAllBooks)
router.route("/featured").get(getFeaturedBooks)
router.route("/:id").get(getSingleBook)

module.exports=router