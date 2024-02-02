import { useSelector } from "react-redux"


const cartTotals=()=>{
  
    const {cartTotal,orderTotal,shipping,tax}=useSelector(state=>state.cartState)
    return(
        <div className=" rounded-md w-[30vw] h-[55vh] items-center  mt-9">
            <div className="mx-auto w-[25vw]">
            <div className=" mx-auto bg-gray-50 p-8 w-[25vw]  ">
            <div className="flex justify-between text-lg capitalize">
                <p>subTotal</p>
                <p>&#8377; {(cartTotal).toFixed(1)}</p>
                
            </div>
            <hr className="mt-0 bg-gray-50 text-gray-400"/>
            <div className="flex justify-between text-lg capitalize">
                <p>shipping</p>
                <p>&#8377; {shipping}</p>
            </div>
            <hr className="mt-0 text-gray-400"/>

            <div className="flex justify-between text-lg capitalize">
                <p>tax</p>
                <p>&#8377; {(tax).toFixed(1)}</p>
            </div>
            <hr className="mt-0 text-gray-700"/>

            <div className="flex justify-between text-lg capitalize font-medium">
                <p>OrderTotal</p>
                <p> &#8377; {(orderTotal).toFixed(1)}</p>
            </div>
            </div>
            </div> 
        </div>
    )
}

export default cartTotals