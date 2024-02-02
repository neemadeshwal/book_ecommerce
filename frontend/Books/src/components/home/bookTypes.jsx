import { Link, useNavigate } from "react-router-dom"
import BookTypes from "../../../types"
import React from "react"
import { useGlobalContext } from "../../context"
import customFetch from "../../../utils"
const Types=()=>{
    const {type,setType}=useGlobalContext()
    const navigate=useNavigate()
    function handleClick(name){

    //   navigate(`/products?genre=${name}`)
    setType([...name])

    //     if( !type.includes(name))
    //    setType(prevVal=>[...prevVal,name])
    // else{
    //     setType(prevVal=>prevVal.filter((item)=>item!==name))
    // }
    // }
    }

    React.useEffect(()=>{
        const fetchData=async()=>{
            
        }
    })
    return(
        <div className="w-full">
            <div>
                <h2 className="text-center mb-14 text-gray-700 text-4xl">Choose your genre</h2>
            <div className="w-[85vw] grid grid-cols-3 gap-10  m-auto">
           {
            BookTypes.map((type)=>{

                const {id,name,image,content,color}=type
                console.log(color)
                return(
                    // <Link to={`/products`} className="no-underline text-gray-700">
                    <div style={{background:color}} className="px-16 py-10 rounded-md transition ease-in-out delay-300 hover:shadow-lg border-x cursor-pointer " key={id}
                   onClick={()=>handleClick(name)}
                   >
                        <img src={`../assets/${image}`} className="object-fit w-24 h-24" alt={name}/>
                        <div>
                            <h5 className="text-2xl font-medium mt-2 hover:text-peach   ">{name}</h5>
                            <p className="text-xl">{content}</p>
                            </div>
                        </div>
                        // </Link>    
                )
            })
           }
           </div>
        </div>
        </div>
    )
}

export default Types