import { createSlice } from "@reduxjs/toolkit";

import toast ,{Toaster} from "react-hot-toast"
const defaultStore={
    cartItems:[],
    NumItemInCart:0,
    cartTotal:0,
    shipping:200,
    tax:0,
    orderTotal:0

}

const getCartFromLocalStorage=()=>{
   return JSON.parse( localStorage.getItem("cart"))||defaultStore
}

const cartSlice=createSlice({
    name:"cart",
    initialState:getCartFromLocalStorage(),
    reducers:{
     addItem:(state,action)=>{
        const {product}=action.payload
       const item=state.cartItems.find((item)=>item.cartId===product.cartId)
        if(item){
            item.amount+=product.amount
        }
        else{
            state.cartItems.push(product)
        }
        
        state.NumItemInCart+=product.amount
        state.cartTotal+=product.price*product.amount
        cartSlice.caseReducers.calculateTotals(state)
        toast.success("Item added to cart")
        
      
     },
     removeItem:(state,action)=>{
        const {cartId}=action.payload
        

        const product=state.cartItems.find((item)=>item.cartId===cartId)

        state.cartItems=state.cartItems.filter((item)=>item.cartId!==cartId)

        state.NumItemInCart-=product.amount
        state.cartTotal-=product.amount*product.price
        cartSlice.caseReducers.calculateTotals(state)
        toast.error("Item removed from cart")


     },
    
     editItem:(state,action)=>{
        const{cartId,amount}=action.payload

        const item=state.cartItems.find((item)=>item.cartId===cartId)
       
        state.NumItemInCart+=amount-item.amount
        state.cartTotal+=(amount-item.amount)*item.price
        item.amount=amount
        cartSlice.caseReducers.calculateTotals(state)
        toast.success("Item successfully edited")

     },
    
     clearCart:(state)=>{
        localStorage.setItem('cart',JSON.stringify(defaultStore))
        toast.error("Your Bag is empty!")
        return defaultStore

     },
     calculateTotals:(state)=>{
           state.tax=0.1*state.cartTotal
           state.orderTotal=state.cartTotal+state.tax+state.shipping
           localStorage.setItem("cart",JSON.stringify(state))
     }
    }
})

export default cartSlice.reducer
export const {addItem,removeItem,editItem,clearCart}=cartSlice.actions