const customApi=require("./custom-api")
const {StatusCodes}=require("http-status-codes")

class notFound extends customApi{
    constructor(message){
        super(message)
        this.statusCode=StatusCodes.NOT_FOUND
    }
}
module.exports=notFound