const customApi=require("./custom-api")
const {StatusCodes}=require("http-status-codes")

class badRequest extends customApi{
    constructor(message){
        super(message)
        this.statusCode=StatusCodes.BAD_REQUEST
    }
}

module.exports=badRequest