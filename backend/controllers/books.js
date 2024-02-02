

const { BadRequestError, NotFound } = require("../errors")
const booksModel=require("../models/books")
const {StatusCodes}=require("http-status-codes")
// const getAllBooks=async(req,res)=>{
//    const allBooks=await booksModel.find({})
//    res.status(StatusCodes.OK).json({allBooks})


// }

const getAllBooks=async(req,res)=>{
    const {bookName,search,price,author,ratings,featured,bestseller,
    languageAvailable,genre,newArrival,ebooksAvailable,audiobooksAvailable,discount,
    numericFilters,fields,sort
    }=req.query

    const queryObject={}

    if(search){
        queryObject.bookName={$regex:search,$options:"i"}
        queryObject.author={$regex:search,$options:"i"}

    }
    
    if(featured){
        queryObject.featured=featured
    }
    if(bestseller){
        queryObject.bestseller=bestseller
    }
    
    if(languageAvailable){
        const languageArray=languageAvailable.includes(",")?languageAvailable.split(","):[languageAvailable]
        if (languageArray.length > 1) {
            queryObject.languageAvailable = { $in: languageArray.map(g =>new RegExp(g, "i")) };
        } else {
            queryObject.languageAvailable = { $regex: languageArray[0], $options: "i" };
        }
        // queryObject.languageAvailable=languageAvailable
    }
    if(genre){

        const genreArray=genre.includes(",")?genre.split(","):[genre]
        if (genreArray.length > 1) {
            queryObject.genre = { $in: genreArray.map(g =>new RegExp(g, "i")) };
        } else {
            queryObject.genre = { $regex: genreArray[0], $options: "i" };
        }
    }
    if(newArrival){
        queryObject.newArrival=newArrival
    }
    if(ebooksAvailable){
        queryObject.ebooksAvailable=ebooksAvailable
    }
    if(audiobooksAvailable){
        queryObject.audiobooksAvailable=audiobooksAvailable
    }
    
    if(numericFilters){
        const operatorMap={
            '>':"$gt",
            ">=":"$gte",
            "=":'$eq',
            "<":"$lt",
            "<=":"$lte"
        }
        const regEx=/\b(<|>|=|<=|>=)\b/g

        let filters=numericFilters.replace(regEx,(match)=>`-${operatorMap[match]}-`)

        const options=['ratings','price','paperbackPrice','hardcoverPrice','ebookPrice',"discount"]

         filters=filters.split(",").forEach(item=>{
 const [field,operator,value]=item.split("-")

        if(options.includes(field)){
            queryObject[field]={[operator]:Number(value)}
        }
        })

    

        if(fields){
            const fieldList=fields.split(",").join(" ")

            result=result.select(fieldList)
        }}
        let result= booksModel.find(queryObject)

            if(sort){
            const sortList=sort.split(",").join(" ")
           result=await result.sort(sortList)

        }
        else{
            result=result.sort("createdAt")
        }

        // const page=Number(req.query.page)||1
        // const limit=Number(req.query.limit)||10

        // const skip=(page-1)*limit

        // result=await result.limit(limit).skip(skip)

    

       const books=await result

       res.status(StatusCodes.OK).json({data:books})
    
   
}

const getFeaturedBooks=async(req,res)=>{
    try{
        const featuredBooks=["To Kill a Mockingbird","The Alchemist","Pride and Prejudice"]
        const featuredUser=await booksModel.find({
            bookName:{$in:featuredBooks}
        })
    
        res.status(StatusCodes.OK).json({featuredUser})
    }
    catch(err){
        throw new BadRequestError("ERROR OCCUREDD")
    }
   
}

const getSingleBook=async(req,res)=>{
    const{id}=req.params

    const book=await booksModel.findOne({_id:id})
    if(!book){
        throw new NotFound(`Book with ${id} not found!`)

    }
    res.status(StatusCodes.OK).json(book)
}

module.exports={getAllBooks,getFeaturedBooks,getSingleBook}