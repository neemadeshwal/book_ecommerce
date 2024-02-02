import {configureStore} from "@reduxjs/toolkit"

import cartReducer from "./features/cart/cartSlice"
import wishListReducer from "./features/wishlist/wishlistSlice"
const store=configureStore({
reducer:{
   cartState: cartReducer,
   wishListState:wishListReducer
}
})

export default store


//  //    if(discount){
//         //     setSearchParams( generateNewSearchParams("discount",discount))

//         //    }
//         if(type){
//          const types=type.join(',')
//          setSearchParams(generateNewSearchParams("genre",types))
//         }
//         if(languages){
//          const languageString=languages.join(",")
//          setSearchParams(generateNewSearchParams("language",languageString))
//         }
//       },[rating,discount,type,languages])
