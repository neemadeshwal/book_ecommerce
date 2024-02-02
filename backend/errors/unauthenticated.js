const customApi=require("./custom-api")

const {StatusCodes}=require("http-status-codes")

class unAuthenticatedError extends customApi{
    constructor(message){
        super(message)
            this.statusCode=StatusCodes.UNAUTHORIZED
        
    }
}
module.exports=unAuthenticatedError