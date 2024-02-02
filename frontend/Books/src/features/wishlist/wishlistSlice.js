
import {createSlice} from "@reduxjs/toolkit"
import toast from "react-hot-toast"

const defaultStore={
    wishlistItems:[],
    NumItemInWishlist:0,

}

const getWishlistFromLocalStorage=()=>{
    return JSON.parse(localStorage.getItem('wishlist'))||defaultStore

}

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:getWishlistFromLocalStorage(),
    reducers:{
        addWishlistItem:(state,action)=>{
            const {product}=action.payload
            console.log(product)
            console.log(product.wishListId)

            const item=state.wishlistItems.find(item=>item.wishListId===product.wishListId)
              console.log(item)
            if(!item){
                state.wishlistItems.push(product)
                

            }
           wishlistSlice.caseReducers.addToLocalStorage(state)
           toast.success("Item added to your wishlist")
           
           
        },
        removeWishlistItem:(state,action)=>{
            const {wishListId}=action.payload
            console.log(wishListId)

            state.wishlistItems=state.wishlistItems.filter(item=>item.wishListId!==wishListId)
           wishlistSlice.caseReducers.addToLocalStorage(state)
           toast.error("Item removed from your wishlist")
        },
        addToLocalStorage:(state)=>{
            localStorage.setItem("wishlist",JSON.stringify(state))
        }

    }
})

export default wishlistSlice.reducer
export const {addWishlistItem,removeWishlistItem}=wishlistSlice.actions
