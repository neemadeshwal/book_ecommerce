import Hero from "../components/home/hero"
import Feature from "../components/home/features"
import FeaturedBooks from "../components/home/featured"
import BookTypes from "../components/home/bookTypes"
import { Outlet } from "react-router-dom"
const Home=()=>{
    return(
        <div className="h-full">
         <Hero/>
        <Feature/>
        <FeaturedBooks/>
        <BookTypes/>
        <Outlet/>
        </div>

    )
}
export default Home;