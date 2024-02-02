
import React from "react";
import {BsStar,BsStarFill} from "react-icons/bs"
import { useGlobalContext } from "../../context";

const Ratings=()=>{
  const[check,setCheck]=React.useState()

  const {rating,setRating,numericFilters,setNumericFilters}=useGlobalContext()

  console.log(rating)
  function handleCheck(e){
    setCheck(e.target.value)
    const val=Number(e.target.id)
    setRating(val)

    setNumericFilters(true)

  }
    

    return(
           <div>
            <div className="text-xl text-yellow-500">
                <div className="flex gap-4">
                <input className="mt-0" type="checkbox" name="ratings" id="4" value={4} onChange={handleCheck} checked={check==4}/>
                <label htmlFor="4" className="flex  gap-1 mt-2"><BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStar/> <span className="text-black ml-1">& Up</span></label>
                </div>
                <div className="flex gap-4">
                <input type="checkbox" name="ratings" id="3" value={3} onChange={handleCheck} checked={check==3}/>
               
                <label className="flex gap-1 mt-2" htmlFor="3"><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><BsStar/> <span className="text-black ml-1">& Up</span></label>
                </div>
                <div className="flex gap-4">
                <input type="checkbox" name="ratings" id="2" value={2} onChange={handleCheck} checked={check==2}/>

                <label className="flex gap-1 mt-2" htmlFor="2"><BsStarFill/><BsStarFill/><BsStar/><BsStar/><BsStar/> <span className="text-black ml-1">& Up</span></label>
                </div>
                <div className="flex gap-4">
                <input type="checkbox" name="ratings" id="1" value={1} onChange={handleCheck} checked={check==1}/>
                <label htmlFor="1" className="flex gap-1 mt-2"><BsStarFill/><BsStar/><BsStar/><BsStar/><BsStar/> <span className="text-black ml-1">& Up</span></label>

                </div>

            </div>


           </div>
    )
}

export default Ratings