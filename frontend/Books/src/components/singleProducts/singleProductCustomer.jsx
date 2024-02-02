import { useOutletContext } from "react-router-dom"

import { starRatings } from "../../functions"
import {BsPersonCircle}from "react-icons/bs"
import profile from "../../../public/assets/profilePic.png"
const SingleProductCustomerRatings=()=>{
    const data=useOutletContext()

    const [firstReview,secondReview]=data.reviews||[]

    
        const{
            username:username1,
            rating:rating1,
            _id:id1
        }=firstReview
    
    
        const{
            username:username2,
            rating:rating2,
            _id:id2
        }=secondReview
    if(data.reviews.length===0){
        return(
            <div className="w-[86vw] m-auto">
                <h4>Be the first one to review</h4>

            </div>
        )
    }
    return(
        
        <div className="w-[86vw] m-auto">
            <div>
                <h5 className="text-3xl text-gray-600">Customer Ratings</h5>
                
                <div className="ml-4 mt-4">
                <div className="" key={id1}>
                    <div className="flex gap-3">
                        <img className="w-9 h-8" src={profile} alt=""/>
                   <p className="text-xl font-medium  ">{username1}</p>

                    </div>
                   <p className="flex gap-2 ml-12">{rating1 } { starRatings(rating1)}</p>
                </div>
                <div className="" key={id2}>
                    <div className="flex gap-3">
                    <img className="w-9 h-8" src={profile} alt=""/>
                    <p className="text-xl font-medium">{username2}</p>

                    </div>
                   <p className="flex gap-2 ml-12"> {rating2 }{ starRatings(rating2)}</p>
                </div>
                </div>

            </div>
         
        </div>
    )
}

export default SingleProductCustomerRatings