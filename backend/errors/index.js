const BadRequestError=require("./bad-request")
const CustomApiError=require("./custom-api")
const NotFound=require("./not-found")
const Unauthenticated=require("./unauthenticated")

module.exports={
    BadRequestError,
    CustomApiError,
    NotFound,
    Unauthenticated
}