
import {BsDash,BsPlus,BsX} from "react-icons/bs"
import React from "react"
import { useDispatch } from "react-redux"
import { removeItem ,editItem} from "../../features/cart/cartSlice"
import { starRatings,currencyChange } from "../../functions"
const cartItems=({item})=>{
    const imgPath="../../public/uploads/"

    const amt=[1,2,3,4,5,6,7,8,9,10]
    const dispatch=useDispatch()
    function handleRightClick(){
        setAmount((prevVal)=>prevVal+1)
    }
    function handleLeftClick(){
        setAmount((prevVal)=>prevVal-1)
    }
    function removeItemFromCart(){
         dispatch(removeItem({cartId}))
    }

    function handleEdit(e){
        dispatch(editItem({cartId,amount:parseInt(e.target.value)}))
    }
    
    const {cartId,bookName,image,genre,ratings,price,author,amount}=item
    const [amounts,setAmount]=React.useState(amount)

    

    return(
        <div>
            <div  >
                <div className="flex gap-16 mt-12 items-center border rounded p-4 w-[55vw] relative">
                    <div className="m-0 p-0">
                        <img className="w-[120px] h-[120px] border" src={`${imgPath}${image} `} alt=""/>
                    </div>
                    <div className="w-[22vw]">
                     <h5 className="text-xl">{bookName}</h5>
                     {/* <p className="text-peach text-xl font-semibold">${price}</p> */}
                     <p className="text-lg mt-0 mb-1">{genre}</p>
                    <p className="text-lg text-gray-500 mb-0 ">{author}</p>

                     <p className="text-md mt-0 text-gray-700 inline">{ratings} {starRatings(ratings)}</p>
                    </div>
                    <div>
                        <div className="flex gap-4 items-center">
                        
                           <label className="mt-2" htmlFor="amt">Qty:</label>
                           <div className="flex gap-1 border rounded pt-2 mt-2 px-1">

                            <select name="amt" id="amt" value={amount} onChange={handleEdit}>
                                {
                                    amt.map((item)=>{
                                        return(
                                            <option value={item}>{item}</option>
                                        )
                                    })
                                }
                            </select>
                           
                                        </div>            
                           
                        </div>
                       
                        
                    </div>
                    <div>
                        <h5 className="w-[7vw] mt-2">&#8377; {price}</h5>
                    </div>
                <BsX className="absolute right-0 top-0 text-4xl p-1 hover:text-peach " onClick={removeItemFromCart}/>

                </div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default cartItems