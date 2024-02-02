
import CartItemsList from "../components/cart/cartItemsList"
import CartTotal from "../components/cart/cartTotals"
import { useSelector,useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { clearCart } from "../features/cart/cartSlice"
import { Toaster } from "react-hot-toast"
import React from "react"
const Cart=()=>{
    const cartArray=useSelector((state)=>state.cartState.cartItems)
    const dispatch=useDispatch()

    React.useEffect(()=>{
        if(cartArray.length===0){
            dispatch(clearCart())

        }
    },[cartArray,dispatch])
    if(cartArray.length===0){
        return(<div className="min-h-[100vh] m-20 text-center ">
            <h1 className=" text-3xl font-poppins font-semibold tracking-wide">Your shopping List is empty</h1>
            <Link to="/wishlist" className="no-underline">
            <button className="text-peach mt-10 border rounded px-4 py-2 border-peach hover:bg-peach font-medium transition ease-in-out duration-500 hover:text-white">Add Items from whishlist</button>
            </Link>
        </div>)
    }
    return(
        <div className="flex pt-10 min-h-[100vh] m-0">
            <Toaster/>
         <CartItemsList/>
         <div>
         <CartTotal/>
         <Link to="/checkout">
         <button className="bg-peach hover:bg-red-700 text-white text-xl rounded w-[80%] ml-12 py-[0.6rem] mt-3">Place order</button>
         </Link>


         </div>

        </div>
    )
}

export default Cart