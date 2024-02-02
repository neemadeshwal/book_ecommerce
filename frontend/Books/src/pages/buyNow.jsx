
import { starRatings,currencyChange } from "../functions"
import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"
import {  useDispatch } from "react-redux"
import { addItem } from "../features/cart/cartSlice"
const BuyNow=({data})=>{
    const{_id,bookName,image,price,ratings,genre,author}=data
    const shipping=200
    const total=shipping+Number(currencyChange(price))

    const {setBuyNowBook}=useGlobalContext()
    const Navigate=useNavigate()
    const imgPath="../../public/uploads/"
    function handleCancel(){
          setBuyNowBook({})
          Navigate("/products")
    }
    const dispatch=useDispatch()
    const cartProduct={
        id:_id,bookName,image,genre,author,ratings,price:currencyChange(price), cartId:_id+genre,amount:1
    }
    function addToBag(){
        dispatch(addItem({product:cartProduct}))
    }
    return(
        <div key={_id}>
            <div className="flex gap-10 m-0 font-poppins">
        <div>
            <img src={`${imgPath}${image}`} className="w-[100px] h-[130px] border-2 border-gray-500" alt=""/>
            </div>    
        <div className="m-0 p-0">
        <p className="font-bold">{bookName}</p>
        <p>{genre}</p>
        <p>{ratings}{starRatings(ratings)}</p>
        </div>
        </div>
        <div className="ml-6 mt-2 capitalize text-xl text-gray-700 font-medium">

        <p className="m-0">price:<span className="font-normal ml-14 text-lg">&#8377; {currencyChange(price)}</span></p>
        <hr className="m-1 p-0"/>

            <p>shipping:<span  className="font-normal ml-7 text-lg">&#8377; {shipping}</span></p>
            <hr className=" m-1 p-0 font-medium text-gray-950 bg-black"/>
            <p>Total:<span  className="ml-16 text-lg">&#8377; {total}</span></p>
        </div>
           <div className=" w-full">
          <button className="w-full border-gray-800 hover:bg-gray-800  border-2 text-lg font-medium text-gray-800 hover:text-white rounded px-4 py-2 mb-2 transition ease-in-out duration-500" onClick={addToBag} >Add to bag</button>
          <button className="w-full border-peach border-2 text-lg font-medium text-peach hover:bg-peach hover:text-white rounded px-4 py-2 transition ease-in-out duration-500" onClick={handleCancel}>cancel</button>
          </div>
        </div>
    )
}

export default BuyNow