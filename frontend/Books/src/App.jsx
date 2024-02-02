import {createBrowserRouter,RouterProvider} from "react-router-dom"
// import {Home} from "./pages"
import {Home,About,Products,Cart,Header,HomeContent, Footer,Login,Register} from "./pages"
import { NavLink } from "react-router-dom"
import { FeaturedLoader } from "./components/home/featured"
import {HomeContentLoader} from "./pages/homeContent"
import {ProductLoader} from "./pages/products"
import SingleProduct,{SingleProductLoader} from "./pages/singleProduct"
import Wishlist from "./pages/wishlist"
import SingleProductHeader from "./pages/singleProductHeader"
import SingleProductBookFormat from "./components/singleProducts/singleProductFormats"
import SingleProductCustomerRatings from "./components/singleProducts/singleProductCustomer"
import SingleProductDetail from "./components/singleProducts/singleProductdetails"
import SingleProductPhoto from "./components/singleProducts/singleProductPhotos"
import Checkout from "./pages/checkout"
import Error404 from "./pages/error404"
const router=createBrowserRouter([
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/",
    element:
    <Header/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:FeaturedLoader,

        children:[{
             path:"/",
             element:<HomeContent/>,
             loader:HomeContentLoader
        },
       
      ]
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/products",
        element:<Products/>,
        loader:ProductLoader
       
      },
      {
        path:"/products/:id",
        element:<SingleProduct/>,
        loader:SingleProductLoader,
        children:[
          {
            path:"/products/:id",
            element:<SingleProductHeader/>,
            children:[
              {
                index:true,
                element:<SingleProductDetail/>
                
              },
              {
                path:"photos",
                element:<SingleProductPhoto/>
                
              },
              {
                path:"bookformats",
                element:<SingleProductBookFormat/>
                
              },
              {
                path:"customerratings",
                element:<SingleProductCustomerRatings/>
                
              }
            ]

          }
        ]
      },
      {
        path:"/wishlist",
        element:<Wishlist/>
      },
      {
        path:"/checkout",
        element:<Checkout/>
      }

    ]

  },
  {
    path:"*",
    element:<Error404/>
  }
 
])

const App=()=>{
  console.log(Home)
  return (<RouterProvider router={router} />)
}

export default App