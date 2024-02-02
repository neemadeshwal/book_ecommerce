
import CartItems from "./cartItems"

import {useSelector} from "react-redux"
const cartItemsList=()=>{
    const cartItems=useSelector(state=>state.cartState.cartItems)
   
      return(
        <div className="m-14 mx-14 mt-0 ">
                <h1 className="text-gray-600 tracking-wider text-3xl ">Shopping Cart</h1>
                <hr/>


        {
            cartItems.map((item)=>{
                return (<CartItems key={item.cartId} item={item}/>)
            })
        }
        </div>
      )
}


export default cartItemsList