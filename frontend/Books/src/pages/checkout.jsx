import CheckoutForm from "./checkoutForm"
import CartTotals from "../components/cart/cartTotals"
import { useGlobalContext } from "../context"
import BuyNow from "./buyNow"
const Checkout=()=>{
    const{buyNowBook}=useGlobalContext()
    console.log(buyNowBook)
    return(
        <div className="w-[80vw] m-auto py-12">
            <div className="">
                <h3 className="text-4xl text-gray-600">Place your order</h3>
                <hr/>
            </div>
            <div className="flex justify-between ">

                <CheckoutForm/>
                {
              
              Object.keys(buyNowBook).length > 0?<BuyNow data={buyNowBook}/>:  <CartTotals/>
                }
            </div>
         

        </div>
    )
}

export default Checkout