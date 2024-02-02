import { Link } from "react-router-dom"
// import x from "../../public/assets/404"
const Error404=()=>{
    return(
        <div className="p-20 text-center flex flex-col items-center">
            <img className="w-[500px] h-[400px]" src="../../public/assets/404.jpg" alt=""/>
            <Link to="/" className="no-underline">
            <button className="mt-8 bg-peach text-white px-4 py-2 font-lg rounded hover:bg-red-600">Back to home</button>

            </Link>
        </div>
    )
    
}
export default Error404