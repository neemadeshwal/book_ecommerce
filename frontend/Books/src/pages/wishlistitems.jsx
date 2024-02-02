import { BsX } from "react-icons/bs"
import {useDispatch, useSelector} from "react-redux"
import { removeWishlistItem } from "../features/wishlist/wishlistSlice"
import { addItem } from "../features/cart/cartSlice"
import { starRatings,currencyChange } from "../functions"
import toast,{ Toaster } from "react-hot-toast"
const wishlistItem=({item})=>{
    const imgPath="../../public/uploads/"

    console.log(item)

    const dispatch=useDispatch()

    function removeFromWishlist(){
         dispatch(removeWishlistItem({wishListId}))
    }
    const {_id,wishListId,bookName,image,genre,ratings,price,author}=item

    const cartProduct={
        productId:_id,
        cartId:_id+genre,
        bookName,
        image,
        genre,ratings,author,price:currencyChange(price),amount:1
    }

    function handleItem(){
           dispatch(addItem({product:cartProduct}))
           dispatch(removeFromWishlist({wishListId}))
           toast.success("Item moved to bag")
    }

return(

    <div className="w-[17vw] flex  justify-center rounded-md border  relative">
        <Toaster/>
         <div key={wishListId} className=" ">
                        <div>
                            <img src={`${imgPath}${image}`} className="w-[240px] h-[240px]" alt=""/>
                            </div>
                        <div className="mt-2 px-4">
                            <h4 className="text-xl text-gray-700" >{bookName}</h4>
                            <p className="text-peach text-xl font-semibold my-0"> &#8377; {price}</p>
                            <p className="text-gray-600 text-md mt-2 my-0 py-0">{genre}</p>
                            <p className="mt-2">{ratings}{starRatings(ratings)}</p>

                           
                            </div>  
                            <hr className="my-0"/>
                        <button onClick={handleItem} className="bg-white text-gray-800 hover:text-peach transition ease-in-out duration-700 text-lg  font-medium py-2  px-3 w-full">Move to cart</button>      
                        </div>               
              
       
        <BsX className="absolute top-3 right-3 transition ease-in-out duration-700 text-3xl border-2 rounded-full bg-white hover:text-peach hover:border-peach" onClick={removeFromWishlist}/>
    </div>
)
}

export default wishlistItem