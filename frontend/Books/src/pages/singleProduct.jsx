import React from "react"
import customFetch from "../../utils"
import {useLoaderData, useParams,Outlet,useNavigate} from "react-router-dom"
import { BsChevronLeft, BsHeart,BsChevronRight, BsStar, BsDash, BsPlus,BsHeartFill,BsStarFill } from "react-icons/bs"
import {addItem} from "../features/cart/cartSlice"
import {useDispatch,useSelector} from "react-redux"
import { useGlobalContext } from "../context"


import {currencyChange,starRatings}  from "../functions"

import {addWishlistItem,removeWishlistItem} from "../features/wishlist/wishlistSlice"
import { Toaster } from "react-hot-toast"
const SingleProductLoader=async({params})=>{
    const {id}=params
    const path=`/api/v1/books/${id}`
    const data=await customFetch.get(path)
    return data.data

}

export default ()=>{

    const dispatch=useDispatch()
    const [amount,setAmount]=React.useState(1)
    const singleProduct=useLoaderData()
    const {_id,image,bookName,description,price,discount,genre,author,ratings}=singleProduct
const[addWishlist,setAddWishlist]=React.useState(false)

    const imgPath="../../public/uploads/"
    const navigate=useNavigate()
    const {buyNowBook,setBuyNowBook}=useGlobalContext()

    

    function handleRightClick(){
        setAmount((prevVal)=>prevVal+1)
    }
    function handleLeftClick(){
        if(amount>1){
            setAmount((prevVal)=>prevVal-1)

        }
    }
    const cartProduct={
        productId:_id,
        cartId:_id+genre,
        bookName,
        image,
        genre,ratings,author,price:currencyChange(price),amount
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
   

   

        const wishlist=useSelector(state=>state.wishListState.wishlistItems)
      



    function handleAddWishlist(){
        setAddWishlist(false)
        dispatch(addWishlistItem({product:wishlistProduct}))

    }
    function handleRemoveWishlist(){
        setAddWishlist(true)
        dispatch(removeWishlistItem({wishListId:wishlistProduct.wishListId,wishlistVal:false}))
    }

    function handleBuyNow(id){
        if(id){
            setBuyNowBook(singleProduct)
        }
        navigate('/checkout')
    }
   
    return(
        <>
        <div>
            <Toaster/>
             <div key={_id} className="flex m-12  justify-around">
                            <div className=" rounded border w-[350px] h-[450px]  flex justify-center items-center ">
                                <div className="w-[300px] h-[400px] overflow-hidden">
                                <img src={`${imgPath}${image}`} className="w-[300px] h-[400px] hover:zoom-105 transform transition  scale-100 hover:scale-[110%] ease-in duration-500" alt=""/>
                                </div>
                                </div>
                            <div className="p-10 pt-8 w-[50vw] ">   
                            <div className="">
                                <h1 className="text-3xl font-poppins">{bookName}</h1>
                                <p className="text-peach text-2xl mt-4 font-semibold font-poppins">&#8377;  {currencyChange(price)}</p>
                                <p className="text-gray-800 text-xl ">{genre}</p>
                                <p className="text-gray-700 text-xl">{author}</p>
                                <p className="flex gap-2 items-center">{ratings} {starRatings(ratings)}</p>
                                <p className="text-lg text-gray-500 text-serif">{description}</p>
                                </div> 
                                <div className="transition duration-300 ease-in-out">
                                    <div className="flex items-center gap-3">
                                        <div className="flex justify-center items-center" >
                                    <div className="flex item-center gap-3  text-gray-500  border text-xl pt-3 px-3">
                                       <BsDash  className={`${amount>1?"opacity-100":"opacity-0"} mt-[3px]`} onClick={handleLeftClick}/>
                                        <p className="mt-0">{amount}</p>
                                        <BsPlus className="mt-[3px]" onClick={handleRightClick}/>
     
                                    </div>
                                    </div>
                                    <button className="bg-gray-900 px-4 py-3 text-xl text-white hover:bg-peach transition duration-500 ease-in-out" onClick={handleAddItem}>Add to cart</button>
                                        <button  className="px-4 py-3   text-gray-500 hover:text-peach">{  wishlist.find((item)=>item.wishListId===_id+genre+image)?
                                        <BsHeartFill onClick={handleRemoveWishlist}  className="text-2xl text-red-600 transition duration-500 ease-in-out"/>:<BsHeart onClick={handleAddWishlist} className="text-2xl transition duration-500 ease-in-out"/>}</button>
                                    </div> 
                                    </div>
                                    <div className="mt-10">
                                        <button className="bg-gray-900 px-4 py-3 text-xl text-white hover:bg-peach w-[20vw] transition duration-500 ease-in-out" onClick={()=>handleBuyNow(_id)}>Buy it now</button>
                                    </div>
                                </div> 
                                  
                            </div>
                            </div>
                            <Outlet context={singleProduct}/>
                            </>)
}

export {SingleProductLoader}