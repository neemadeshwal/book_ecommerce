import React from "react"
import { useLoaderData,Link,useNavigate } from "react-router-dom"
import customFetch from "../../utils"

import {currencyChange,starRatings} from "../functions"

import {BsSearch,BsHeart,BsBag,BsArrowRepeat,BsChevronLeft,BsChevronRight,BsCartCheck,BsHeartFill, BsBagFill} from "react-icons/bs"
import Reviews from "../components/home/customer_reviews"
import Store from "../components/home/Stores"

const Get="/api/v1/books"
const imgPath="../../uploads/"

import { useDispatch,useSelector } from "react-redux"
import {addWishlistItem,removeWishlistItem} from "../features/wishlist/wishlistSlice"
import { addItem, removeItem } from "../features/cart/cartSlice"
import toast,{Toaster} from "react-hot-toast"
import { useGlobalContext } from "../context"
const HomeContentLoader=async()=>{
    try{
        const newArrival= await customFetch.get(`${Get}?newArrival=true`)
        const bestSeller=await customFetch.get(`${Get}?bestSeller=true`)
        return {newArrival,bestSeller}
    }
    catch(err){
        console.log(er)
    }

    
}


const Content=()=>{
    const data=useLoaderData()
const newArrivalData=useLoaderData().newArrival.data.data
const bestSellerData=useLoaderData().bestSeller.data.data

const [newArrivalHover,setNewArrivalHover]=React.useState(false)
const [bestSellerHover,setbestSellerHover]=React.useState(false)

const {setBuyNowBook}=useGlobalContext()
const navigate=useNavigate()

function handleNewArrivalMouseIn(){
    setNewArrivalHover(true)
}
function handleNewArrivalMouseOut(){
    setNewArrivalHover(false)
}
function handleBestSellerMouseIn(){
    setbestSellerHover(true)
}
function handleBestSellerMouseOut(){
    setbestSellerHover(false)
}
const ref1=React.useRef(null)
const ref2=React.useRef(null)


const handleNewArrivalClick=(direction)=>{
  
    const scrollAmount = 355
const scrollOffset = direction === 'left' ? -scrollAmount : scrollAmount;

if (ref1.current) {
    ref1.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth',
    });}

 
   
}
const handleBestSellerClick=(direction)=>{
  
    const scrollAmount = 355
const scrollOffset = direction === 'left' ? -scrollAmount : scrollAmount;



    if (ref2.current) {
        ref2.current.scrollBy({
            left: scrollOffset,
            behavior: 'smooth',
        });}

   
}

const dispatch=useDispatch()

 return(
    <>
    <Toaster/>
    <div className="flex justify-between m-24 font-poppins gap-12 ">
        <div className="relative">
            <div className="">
                <h2>New Arrival</h2>
                <hr/>
            </div>
            <div className="grid scroll-smooth grid-rows-4 w-[26vw] grid-flow-col overflow-hidden   gap-y-6 max-w-[30vw]" ref={ref1} onMouseEnter={handleNewArrivalMouseIn} onMouseLeave={handleNewArrivalMouseOut}>
            {newArrivalHover&&
            <> 
            <button onClick={()=>handleNewArrivalClick('right')} className=" absolute  p-2 right-0 top-[50%]  rounded-full hover:border-2 text-gray-500 hover:text-peach hover:border-peach transition ease-in-out duration-500">
            <BsChevronRight  className="w-8 h-8 "/>
            </button>
            <button onClick={()=>handleNewArrivalClick('left')} className=" absolute p-2 left-0 top-[50%]  rounded-full  hover:border-2 text-gray-500 hover:text-peach hover:border-peach transition ease-in-out duration-500 ">
                <BsChevronLeft   className=" w-8 h-8 "/>

            </button>
            </>} 
                {
                    newArrivalData.map((item)=>{
                        const {_id,bookName,price,image,genre,ratings,author}=item
                        function handleBuyNow(id){
                            if(id){
                                setBuyNowBook(item)
                            }
                            navigate('/checkout')
                        }
                        
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
        const wishlist=useSelector(state=>state.wishListState.wishlistItems)
        const bag=useSelector(state=>state.cartState.cartItems)

        function handleAddWishlist(){
            dispatch(addWishlistItem({product:wishlistProduct}))

    
        }
        function handleRemoveWishlist(){
            dispatch(removeWishlistItem({wishListId:wishlistProduct.wishListId,wishlistVal:false}))
            
        }
        function handleRemoveItemFromCart(){
            dispatch(removeItem({cartId:cartProduct.cartId}))
           }

                        return(
                            <div key={_id} className="flex gap-6 w-[26vw]">
                               <div className="p-4 bg-gray-100">
                                <img src={`${imgPath}${image}`} className="w-24 h-28 object-fill" alt=""/>
                                </div>
                                <div>
                                <div className="mt-0">
                                    <p className="text-xl font-medium ">{bookName}</p>
                                    <p className="text-lg hover:text-peach text-gray-800 font-semibold">&#8377;{currencyChange(price)}</p>
                                    </div>
                                    <div className="flex gap-2">
                                    <Link to={`/products/${_id}`} className="text-gray-800">
                                        <div className="border p-2 rounded-full  hover:bg-peach hover:text-white transition ease-in delay-100 ">
                                       
                                        <BsSearch  />
                                        
                                            </div>
                                            </Link>
                                        <div className="border p-2 rounded-full  hover:bg-peach hover:text-white transition ease-in delay-100">
                                      { wishlist.find((item)=>item.wishListId===_id+genre+image)?
                                        <BsHeartFill  onClick={handleRemoveWishlist}  className="text-xl text-red-600 transition duration-500 ease-in-out"/>:<BsHeart onClick={handleAddWishlist} className="text-xl transition duration-500 ease-in-out"/>}
                                     
                                     
                                        </div>

                                       <div className="border p-2 rounded-full  hover:bg-peach hover:text-white transition ease-in delay-100">
                                       <BsCartCheck />


                                       </div> 

                                       <div className="border p-2 rounded-full  hover:bg-peach hover:text-white transition ease-in delay-100"
                                       >
                                        {
                                        bag.find((item)=>item.cartId===_id+genre)?<BsBagFill onClick={handleRemoveItemFromCart} className="text-blue-800"/>:<BsBag onClick={handleAddItem}/>
                                      }

                                        </div>        
                                       

                                       
                                    </div>
                                        
                            </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
        <div className="relative">
            <div className="">
                <h2>Best seller</h2>
                <hr/>
            </div>
            <div className="grid scroll-smooth overflow-hidden grid-rows-4   grid-flow-col   gap-y-6 w-[26vw] max-w-[30vw]" ref={ref2} onMouseEnter={handleBestSellerMouseIn} onMouseLeave={handleBestSellerMouseOut}>
            {bestSellerHover&&
            <> 
            <button onClick={()=>handleBestSellerClick('right')} className=" absolute  p-2 right-0  top-[50%]  rounded-full hover:border-2 text-gray-500 hover:text-peach hover:border-peach transition ease-in-out duration-500">
            <BsChevronRight  className="w-8 h-8 "/>
            </button>
            <button onClick={()=>handleBestSellerClick('left')} className=" absolute p-2 left-0 top-[50%]  rounded-full  hover:border-2 text-gray-500 hover:text-peach hover:border-peach transition ease-in-out duration-500 ">
                <BsChevronLeft   className=" w-8 h-8 "/>

            </button>
            </>} 
          {
            bestSellerData.map((item)=>{
                const {_id,image,bookName,price,author,ratings,genre}=item
                function handleBuyNow(id){
                    if(id){
                        setBuyNowBook(item)
                    }
                    navigate('/checkout')
                }
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
               function handleRemoveItemFromCart(){
                dispatch(removeItem({cartId:cartProduct.cartId}))

               }
const wishlist=useSelector(state=>state.wishListState.wishlistItems)
const bag=useSelector(state=>state.cartState.cartItems)
function handleAddWishlist(){
    dispatch(addWishlistItem({product:wishlistProduct}))


}
function handleRemoveWishlist(){
    dispatch(removeWishlistItem({wishListId:wishlistProduct.wishListId,wishlistVal:false}))
}
                return(
                    <div className="flex gap-6  h-40 w-[26vw]" key={_id}>
                        <div className="p-4  bg-gray-100">
                            <img className="w-24 h-28 object-fill" src={`${imgPath}${image}`} alt={bookName}/>
                            </div>

                        <div className="mt-0">
                            <div>
                            <p className="text-xl font-medium " >{bookName}</p>
                            <p className="text-lg hover:text-peach text-gray-800 font-semibold">&#8377;{currencyChange(price)}</p>
                            </div>

                            <div className="flex gap-2 ">
                                    <Link to={`/products/${_id}`} className="text-gray-800">
                                       
                                        <div className="border p-2 rounded-full hover:bg-peach hover:text-white transition ease-in delay-100 ">
                                        <BsSearch className="" />
                                            </div>
                                        </Link> 

                                        <div className="border p-2 rounded-full  hover:bg-peach hover:text-white transition ease-in delay-100">
                                      { wishlist.find((item)=>item.wishListId===_id+genre+image)?
                                        <BsHeartFill  onClick={handleRemoveWishlist}  className="text-xl text-red-600 transition duration-500 ease-in-out"/>:<BsHeart onClick={handleAddWishlist} className="text-xl transition duration-500 ease-in-out"/>}
                                     
                                        </div>

                                       <div className="border p-2 rounded-full  hover:bg-peach hover:text-white transition ease-in delay-100">
                                       <BsCartCheck />

                                       </div> 

                                       <div className="border p-2 rounded-full  hover:bg-peach hover:text-white transition ease-in delay-100"
                                       >
                                      {
                                        bag.find((item)=>item.cartId===_id+genre)?<BsBagFill onClick={handleRemoveItemFromCart} className="text-blue-800"/>:<BsBag onClick={handleAddItem}/>
                                     
                                     }
                                      

                                        </div>

                                            
                                       

                                       
                                    </div> 
                        </div>
                        </div>
                )
            })
          }
        </div>
        </div>
        <div>

        </div>
        <div>
            <img 
            className="object-cover h-[124vh] mt-20 w-[35vw] hover:scale-105 duration-500 cursor-pointer "
            src="https://nokshi-2.myshopify.com/cdn/shop/files/products-single-banner-3_6d3da1fb-1f7a-4c25-8cee-0cdc1273a859_grande.png?v=1615354064"alt=""/>
        </div>
    </div>
    <Reviews/>
    <Store/>
    </>
 )   
}

export default Content
export {HomeContentLoader}