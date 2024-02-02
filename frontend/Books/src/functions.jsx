

import {BsStar,BsStarFill,BsStarHalf} from "react-icons/bs"

const starRatings=(num)=>{
    const wholeNum=Math.floor(num)
    const decimalNum=num-wholeNum
    
    if(wholeNum===5){
        return (
            <div className="flex gap-2 items-center font-poppins text-xl text-yellow-400">
                <BsStarFill className=" "/>
                <BsStarFill className=""/>
                <BsStarFill className=" "/>
                <BsStarFill className=""/>
                <BsStarFill className=" "/>
            </div>
        )
    }
    if(wholeNum===4)
       {
        if(decimalNum<=0.3){
            return (
                <div className="flex gap-2 items-center font-poppins text-xl text-yellow-400">
                    <BsStarFill className=" "/>
                    <BsStarFill className=""/>
                    <BsStarFill className=" "/>
                    <BsStarFill className=""/>
                    <BsStar className=" "/>
                </div>
            )
        }
        else if(decimalNum<=0.7){
            return (
                <div className="flex gap-2 items-center font-poppins text-xl text-yellow-400">
                <BsStarFill className=""/>
                <BsStarFill className=""/>
                <BsStarFill className=""/>
                <BsStarFill className=""/>
                <BsStarHalf className=""/>
            </div>
            )
    
        }
        else{
           return(
            <div className="flex gap-2 items-center font-poppins text-xl text-yellow-400">
            <BsStarFill className=""/>
            <BsStarFill className=" "/>
            <BsStarFill className=" "/>
            <BsStarFill className=" "/>
            <BsStarFill className=" "/>
        </div>
           )
    
        }
    }
    else if(wholeNum===3){
        {
            if(decimalNum<=0.3){
                <div className="flex gap-2 items-center font-poppins text-xl text-yellow-400">
                <BsStarFill className=""/>
                <BsStarFill className=""/>
                <BsStarFill className=""/>
                <BsStar className=""/>
                <BsStar className=""/>
            </div>
            }
            else if(decimalNum>=0.7){
                <div className="flex gap-2 items-center text-xl font-poppins text-yellow-400">
                <BsStarFill className=""/>
                <BsStarFill className=""/>
                <BsStarFill className=""/>
                <BsStarHalf className=""/>
                <BsStar className=""/>
            </div>
            }
            else{
                <div className="flex gap-2 items-center text-xl font-poppins text-yellow-400">
                <BsStarFill className=" "/>
                <BsStarFill className=""/>
                <BsStarFill className=""/>
                <BsStarFill className=""/>
                <BsStar className=""/>
            </div>
            }
    }}

   

    
}

function currencyChange(num){

    return ` ${(Number(num)*20).toFixed(1)}`
}



export {currencyChange,starRatings}