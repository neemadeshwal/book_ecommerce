import Footer from "./footer"
import Navbar from "./navbar"
import {Outlet}  from "react-router-dom"

const Header=()=>{

return(
    <>
    <Navbar/>
      <Outlet/>
    <Footer/>  

    </>
      
)
}

export default Header