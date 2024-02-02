import {BsSearch,BsHeart,BsHeartFill,BsBag,BsArrowRepeat,BsChevronBarLeft,BsChevronBarRight,BsCartCheck,BsBagFill} from "react-icons/bs"
import { Link } from "react-router-dom"

import React from "react"
import customFetch from "../../../utils"

import { currencyChange,starRatings } from "../../functions"
import { useDispatch,useSelector } from "react-redux"
import {addWishlistItem,removeWishlistItem} from "../../features/wishlist/wishlistSlice"

import { addItem, removeItem } from "../../features/cart/cartSlice"
import toast,{ Toaster } from "react-hot-toast"

const ProductGrid=({data})=>{
   const productData=data
    const imgUrl="../../public/uploads/"
    const[showbtn,setShowBtn]=React.useState(false)
    const [hoveredId,setHoveredId]=React.useState(null)

    function showbtns(id){
        setShowBtn(true)
        setHoveredId(id)
    }
    function hideBtns(){
        setShowBtn(false)
        setHoveredId(null)
    }
//   if(hoveredId){
//   const item=  productData.find((item)=>item._id===hoveredId)
//   const {_id,genre,bookName,author,ratings,price,image}=item
  
    
                        // }
 const dispatch=useDispatch() 
 const wishlist=useSelector(state=>state.wishListState.wishlistItems)
 const bag=useSelector(state=>state.cartState.cartItems)
    return(
        <div className={`grid grid-cols-3 gap-y-8 gap-x-16 `} >
                                     <Toaster/>

            {
                productData.map((item)=>{
                    const {_id,image,bookName,genre,ratings,price,discount,author}=item
                    const cartProduct={
                        productId:_id,
                        cartId:_id+genre,
                        bookName,
                        image,
                        genre,ratings,author,price:currencyChange(price),amount:1
                    }
                
                    const wishlistProduct={
                        productId:_id,
                        wishListId:_id+genre+image,
                        bookName,
                        image,
                        genre,
                        ratings,
                        author,
                       price: currencyChange(price),wishlistVal:true
                    }
                    function handleAddItem(){
                        dispatch(addItem({product:cartProduct}))
                                }
                   
                    function handleRemoveFromCart(){
                        dispatch(removeItem({cartId:cartProduct.cartId}))
                    }
                    function handleAddWishlist(){
                        dispatch(addWishlistItem({product:wishlistProduct}))
                
                    }
                    function handleRemoveWishlist(){
                        dispatch(removeWishlistItem({wishListId:wishlistProduct.wishListId,wishlistVal:false}))}
         
                    return(

                        <div key={_id} className="flex relative justify-center items-center w-[19vw] border hover:shadow-2xl transition transform ease-in-out duration-700    "
                         onMouseEnter={()=>showbtns(_id)}
                          onMouseLeave={hideBtns}>

                            {hoveredId===_id&&  <div className={`flex gap-4 shadow-lg absolute z-20 top-[28%] text-xl rounded-sm bg-white ${showbtn?"show-btn":"hide-btn"} transition transform ease-in-out duration-700  `}>

                            <Link to={`/products/${_id}`} className="text-gray-700"> 

                            <div className="border p-2 rounded-full  hover:text-peach  transition ease-in delay-100 ">
                              
                               <BsSearch className="hover:text-peach"/>
                               </div>
                             
                               </Link> 
                               <div className="border p-2 rounded-full py-3 flex justify-center items-center  hover:text-peach transition ease-in delay-100">
                                      { wishlist.find((item)=>item.wishListId===_id+genre+image)?
                                        <BsHeartFill  onClick={handleRemoveWishlist}  className=" text-red-600 transition duration-500 ease-in-out"/>:<BsHeart onClick={handleAddWishlist} className="text-xl transition duration-500 ease-in-out"/>}
                                        </div>
                                        <div className="border p-2 py-3 flex justify-center items-center rounded-full  hover:text-peach  transition ease-in delay-100">
                                       <BsCartCheck/>

                                       </div> 
                                       <div className="border p-2 py-3 flex justify-center items-center rounded-full  hover:text-peach  transition ease-in delay-100"
                                      >
                                        {
                                        bag.find((item)=>item.cartId===_id+genre)?<BsBagFill onClick={handleRemoveFromCart} className="text-blue-800"/>:<BsBag  onClick={handleAddItem}/>
                                      }

                                        </div>       
                           </div>
                            
                            }

                            <div className="  " >
                                <div className=" flex border justify-center items-center h-[50vh] w-[19vw] bg-gray-100 ">
                                <img className="w-[13vw] h-[38vh] border " src={`${imgUrl}${image}`} alt="img"/>

                                    </div>
                               <div className="mt-2 mx-4">
                                <p className="text-xl">{genre}</p>
                                <p className="text-xl font-semibold">{bookName}</p>

                                <p className="">&#8377; {currencyChange(price)}</p>
                                <p>{ratings} {starRatings(ratings)}</p>
                                </div>
                            </div>
                        
                          
                            </div>
                    )
                })
            }
                

        </div>
    )
}

export default ProductGrid