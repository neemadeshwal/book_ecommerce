import {BsCart4,BsHeart,BsPersonCircle,BsMenu} from "react-icons/bs"
import { NavLink,Link } from "react-router-dom"
import React,{ useState } from "react"
import { useGlobalContext } from "../context"
const Navbar=()=>{
    const {search,setSearch}=useGlobalContext()
    function handleInputChange(e){
        setSearch(e.target.value)
    }
   
    function handleSubmit(e){
         e.preventDefault()
    }
    return(
        <div className="flex justify-center items-center w-full shadow-sm m-0 py-1 ">
            <div className="flex justify-between items-center w-full py-4 px-12">
                <div className="flex gap-9">
            <div className="flex gap-4">
                <img src="../assets/bookslogo.png" className="w-6 h-8 object-cover " alt="books-logo"/>
                <h1 className="text-2xl font-poppins font-semibold">BOOKS!</h1>
            </div>
            <div className="flex items-center gap-8 text-xl text-gray-500 font-roboto tracking-wider font-medium">
               <NavLink  className="text-gray-600 no-underline " to="/"  >
               <div className="underline-parent">
                   <p className="" >Home</p>
                   <div className=""></div>
                </div>
               </NavLink>
                <NavLink  className="text-gray-600 no-underline " to="/about">
                <div className="underline-parent" >
                   <p >About</p>
                </div>
                </NavLink>
                <NavLink  className="text-gray-600 no-underline " to="/products">
                <div>
                    <p>Products</p>

                </div>
                </NavLink>
                <NavLink  className="text-gray-600 no-underline " to="/cart">
                <div>
                    <p>Cart</p>
                </div>
                </NavLink>
            </div>
            </div>
            <div className="flex justify-around w-[700px]">
            <div className="w-[400px] flex">
                <input className="w-[250px] h-4 p-5 py-4 rounded-sm border-gray-100 bg-gray-50" type="text" placeholder="search for any book"  onChange={handleInputChange}/>
                <button className="bg-peach px-4 h-12 text-md py-0 m-0 rounded-sm text-white font-small hover:" onClick={handleSubmit}>search</button>
            </div>
            <div className="flex gap-4 items-center text-xl">
                <Link to="/wishlist" className="text-gray-800 no-underline">
                    <div className="text-center flex flex-col items-center">
                    <BsHeart className=""/>
            <p className="no-underline text-lg">Wishlist</p>
                    </div>
           
            </Link>
            <Link to="/checkout" className="text-gray-800 no-underline">
              <div className="text-center flex flex-col items-center">
                <BsCart4 className="text-2xl"/>
                <p className="text-lg">Checkout</p>
              </div>
              </Link>  
          <Link to="/login" className="no-underline text-gray-800 text-lg">
            <div className="flex items-center flex-col">
            <BsPersonCircle className="w-7 h-7 "/>
            <p>Profile</p>

            </div>
           
              {/* <img
              className="w-8 h-8 rounded-full"
               src="https://w7.pngwing.com/pngs/722/101/png-transparent-computer-icons-user-profile-circle-abstract-miscellaneous-rim-account.png" alt=""/> */}
          </Link>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Navbar