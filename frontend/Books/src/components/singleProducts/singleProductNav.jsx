import { NavLink, useLocation } from "react-router-dom"


const singleProductNav=()=>{

    const location=useLocation()

    return(
       
    <div className="w-[86vw] m-auto  pb-2 " >
    <div className="flex gap-20  text-2xl  ml-14">
        <NavLink exact to="" className={({isActive})=>isActive?'text-peach  underline-offset-[2.3rem] decoration-2 ':"text-gray-600 no-underline"} >
        <p>Details</p>
        </NavLink>
        {/* <NavLink exact to="photos"  className={({isActive})=>isActive?'text-peach  underline-offset-[2.3rem] decoration-2 ':"text-gray-600 no-underline"}>
        Photos
        </NavLink> */}
        <NavLink to="bookformats" className={({isActive})=>isActive?'text-peach  underline-offset-[2.3rem] decoration-2 ':"text-gray-600 no-underline"}>
        <p>Book Formats</p>
        </NavLink>
        <NavLink to="customerratings" className={({isActive})=>isActive?'text-peach  underline-offset-[2.3rem] decoration-2 ':"text-gray-600 no-underline"}>
        <p>Customer ratings</p>
        </NavLink>
    </div>
    <hr/>

    </div>)
}

export default singleProductNav