import { Outlet, useLoaderData, useOutletContext } from "react-router-dom"
import SingleProductNav from "../components/singleProducts/singleProductNav"

const SingleProductHeader=()=>{
    const data=useOutletContext()
    console.log(data)
    return(
        <div>
         <SingleProductNav/>
         <Outlet context={data}/>
        </div>
    )
}

export default SingleProductHeader
