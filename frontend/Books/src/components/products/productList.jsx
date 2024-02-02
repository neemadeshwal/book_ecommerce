import { BsSearch, BsStar,BsHeart,BsCartCheck,BsBag,BsBagFill,BsHeartFill } from "react-icons/bs"

import { Link } from "react-router-dom"
import { currencyChange,starRatings } from "../../functions"
import { useDispatch,useSelector } from "react-redux"
import {addWishlistItem,removeWishlistItem} from "../../features/wishlist/wishlistSlice"

import { addItem, removeItem } from "../../features/cart/cartSlice"
import { Toaster } from "react-hot-toast"
const ProductList=({data})=>{
    const bookData=data
    const imgPath="../../public/uploads/"
    const dispatch=useDispatch() 
 const wishlist=useSelector(state=>state.wishListState.wishlistItems)
 const bag=useSelector(state=>state.cartState.cartItems)
    return(
        <div className="">
            <Toaster/>
            {
                bookData.map((item)=>{
                    const {_id,bookName,image,description,ratings,genre,price,newArrival,discount,author}=item
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
                        <div key={_id} className="flex justify-between border mb-12   ">
                            <div className="relative">
                            <Link to={`products/${_id}`}>
                            <div className="w-[280px] h-[320px] bg-gray-100 flex justify-center items-center ">
                                <img src={`${imgPath}${image}`} className="w-[160px] h-[200px] hover:scale-105 transition ease-in-out duration-500" alt=""/>
                            </div>
                            </Link>
                            {newArrival&&<p className="px-3 py-1  bg-yellow-500 text-white rounded-full absolute top-4 left-3">new</p>}
                            {discount>=Number(5)&&<p className="px-3 py-1 bg-peach text-white rounded-full absolute top-4 right-3">sale</p>}
                            {discount>=Number(5)&&<p className="px-3 py-1 bg-peach text-white rounded-full absolute top-16 right-3">{discount}%</p>}

                            </div>
                            <div className="w-[70%] p-3 ml-6">
                                <h3>{bookName}</h3>
                                <p className="mt-6 text-lg">{description}</p>
                                <p className="text-xl font-medium">{genre}</p>
                                <p className="text-xl font-semibold">&#8377;{currencyChange(price)}</p>
                                <p>{ratings} {starRatings(ratings)}</p>
                                <p></p>
                                <div className="flex gap-2 text-2xl ">
                                    <div className="border flex justify-center items-center border-black py-0 px-4 hover:bg-peach hover:text-white hover:border-0  transition ease-in-out duration-500">
                                    { wishlist.find((item)=>item.wishListId===_id+genre+image)?
                                        <BsHeartFill  onClick={handleRemoveWishlist}  className=" text-red-600 transition duration-500 ease-in-out"/>:<BsHeart onClick={handleAddWishlist} className="text-xl transition duration-500 ease-in-out"/>}

                                    </div>
                                    <div className="flex justify-center items-center ">

                                    {
                                        bag.find((item)=>item.cartId===_id+genre)?
                                    <div onClick={handleRemoveFromCart} className="border  border-black  py-0 px-4 flex gap-3 justify-center items-center hover:bg-peach hover:text-white hover:border-0  transition ease-in-out duration-500  ">

                                        
                                        <BsBagFill  className="text-blue-800"/>
                                        <p className="text-lg mt-3 w-[13vw]">Remove from cart</p>
                                        </div>:
                                    <div onClick={handleAddItem} className="border border-black  py-0 px-4 flex gap-3 justify-center items-center hover:bg-peach hover:text-white hover:border-0  transition ease-in-out duration-500  ">

                                         <BsBag  />
                                         <p className="text-lg mt-3 w-[13vw]">Add to cart</p>
                                        </div>
                                      }
                                     
                                        
                                        </div>
                                        <Link to={`/products/${_id}`} className="text-gray-800">
                                    <div className="border border-black py-[1.1rem] px-4 flex  justify-center items-center hover:bg-peach hover:text-white hover:border-0  transition ease-in-out duration-500" >
                                        <BsSearch/>
                                        </div> 
                                        </Link>   
                                    
                                    </div>
                                </div>
                              

                            </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList
