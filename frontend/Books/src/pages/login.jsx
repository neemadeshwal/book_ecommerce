import { Link } from "react-router-dom"
const Login=()=>{
    return(
        <div className="flex justify-center items-center h-[100vh]">
            <div className="shadow-xl w-[30vw] h-[65vh] rounded p-10">
                <div >
                    <h3 className="text-gray-600 ">Sign in</h3>
                </div>
                <div className="mt-8">
                    <form>
                        <div>
                        <input className="border rounded px-4 py-2 text-xl w-full mb-3" type="email" placeholder="abc@gmail.com"/>

                        </div>
                        <div>
                        <input className="border rounded px-4 py-2 w-full mb-10 text-xl" type="password" placeholder="password"/>

                        </div>

                       <button className="border-2 bg-peach text-white hover:border-red-600   transition duration-500 ease-in-out rounded text-2xl px-4 py-1 w-full">Login</button>

                    </form>
                    <p className="text-align mt-8 ml-8">Not a member?Create an  
                       
                       <Link to="/register" className="no-underline" >  account</Link>
                        
                        </p>
                        <Link to="/">
                        <p>Back to home</p>

                        </Link>
                    
                </div>
            </div>

        </div>
    )
}

export default Login