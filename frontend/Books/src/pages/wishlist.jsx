
import {useDispatch,useSelector} from "react-redux"
import WishlistItem from "./wishlistitems"
import { Link } from "react-router-dom"
const wishlist=()=>{


    const wishlistItems=useSelector(state=>state.wishListState.wishlistItems)
    console.log(wishlistItems)

    if(wishlistItems.length===0){
        return(<div className="min-h-[100vh] m-20 text-center ">
            <h1 className=" text-3xl font-poppins font-semibold tracking-wide">Your WishList is empty</h1>
            <p className="text-lg text-gray-500 ">Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</p>
            <Link to="/products" className="no-underline">
            <button className="text-peach mt-10 border rounded px-4 py-2 border-peach hover:bg-peach font-medium transition ease-in-out duration-500 hover:text-white">Continue Shopping</button>
            </Link>
        </div>)
    }
    return(
        <div>
     <div className="p-10 pb-20 grid grid-flow-row grid-cols-4 gap-10">
        {
            wishlistItems.map((item)=>{
            return(
                <WishlistItem item={item}/>
            )
            })
        }
     </div>
     </div>
    )
}

export default wishlist