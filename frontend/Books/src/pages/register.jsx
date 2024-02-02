import React from "react"
import { Link } from "react-router-dom"
const Register=()=>{
    return(
        <div className="flex justify-center items-center h-[100vh]">
            <div className="shadow-2xl w-[30vw] h-[70vh] rounded p-10 ">
                <div>
                    <h3 className="text-gray-700 ">Sign up</h3>
                </div>
                <div className="mt-8 ">
                    <form>
                    <div className="flex  items-center mb-3 w-full gap-4 text-xl">
                        <input className="border rounded px-4 py-2 w-[50%]" type="text" placeholder="firstname"/>
                        <input className="border rounded px-4 py-2 w-[50%]" type="text" placeholder="lastname"/>
                    </div>
                        <div>
                        <input className="border rounded px-4 py-2 mb-3 w-full text-xl" type="email" placeholder="abc@gmail.com"/>

                        </div>
                        <div>
                        <input className="border rounded px-4 py-2 mb-9 w-full text-xl" type="password" placeholder="password"/>

                        </div>

                       <button className="w-full bg-peach text-white hover:border-3 rounded hover:bg-red-600 px-4 py-2">Create an account</button>

                    </form>
                    <p className="text-align mt-8 ml-8">Already a member?Click to  
                       
                       <Link to="/login" className="no-underline" >  login</Link>
                        
                        </p>
                    
                </div>
            </div>

        </div>
    )
}

export default Register