import React from "react";


import {Link, useSearchParams} from "react-router-dom"
import { useGlobalContext } from "../../context";

const FormTypes=({data})=>{
    const result= data.data
    let newVal=[]
        
        result.map((item)=>{
            const{id,genre}=item
            
            
            newVal.push(genre)
        
        })

        
        const books=[...new Set(newVal)]
const booktypes=[]
books.map((item,index)=>{
    booktypes.push({id:index+500,type:item})
})

const[readMore,setReadMore]=React.useState()
const[searchParams,setSearchParams]=useSearchParams()

const displayed=readMore?booktypes:booktypes.slice(0,8)

const {type,setType}=useGlobalContext()

console.log(type)
function handleChange(e){
    if( !type.includes(e.target.name))
   setType(prevVal=>[...prevVal,e.target.name])
else{
    setType(prevVal=>prevVal.filter((item)=>item!==e.target.name))
}
}



return(
    <div className=" ">
     {
        
        displayed.map((item)=>{

            const {id,type}=item
            return(
               <div className="flex items-center gap-3  " key={id}>
                <form className="flex items-center gap-3">
                <input className="mb-0" type="checkbox" name={type} id={type} onChange={handleChange}  />
                <label className=" mb-0 text-lg" htmlFor={type}>{type}</label>

                </form>
                </div>
            )
        })
     }
    
     <button onClick={()=>setReadMore((prevVal)=>!prevVal)}>{readMore?"read less":"read more"}...</button>
    </div>
)


}

export default FormTypes