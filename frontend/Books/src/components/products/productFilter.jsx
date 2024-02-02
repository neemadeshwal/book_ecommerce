
import {BsPlus,BsDash}  from "react-icons/bs"
import React from "react"
import FormTypes from "../form/FormTypes"
import FormRating from "../form/FormRatings"
import FormPrice from "../form/FormPrice"
import FormLanguage from "../form/FormLanguage"
import FormDiscount from "../form/FormDiscount"
import { useSearchParams,Link } from "react-router-dom"
import { useGlobalContext } from "../../context"


const productFilter=({data})=>{

    let SideData=[
        {
            id:19,
            name:"types",
            value:false,

        },
        {
            id:29,
            name:"ratings",
            value:false,

        },
     
        {
            id:49,
            name:"price",
            value:false,

        },
        {
            id:59,
            name:"language",
            value:false,

        },
        {
            id:69,
            name:"discount",
            value:false,

        },

    ]

    const [show,setShow]=React.useState([...SideData])
    const [type,setType]=React.useState(false)
    const [rating,setRatings]=React.useState(false)
    const [price,setPrice]=React.useState(false)
    const [language,setLanguage]=React.useState(false)
    const [discount,setDiscount]=React.useState(false)

    const [searchParams,setSearchParams]=useSearchParams()
    
    function handleShow(index){
        
     setShow((prevVal)=>{
        const newVal=prevVal.map((item)=>
        item.id===index?{...item,value:!item.value}:item)

        return newVal
     }
   
     )
     const selected=SideData.find(item=>item.id===index)
     if(selected.name==="types"){
               setType(prevVal=>!prevVal)
     }
     if(selected.name==="ratings"){
        setRatings(prevVal=>!prevVal)
     }
     if(selected.name==="price"){
        setPrice(prevVal=>!prevVal)
     }
     if(selected.name==="language"){
        setLanguage(prevVal=>!prevVal)
     }
     if(selected.name==="discount"){
        setDiscount(prevVal=>!prevVal)
     }
     


    }

   const {defaultClear}=useGlobalContext()
 
    return(
        <>
        <div className="w-[17vw] m-20 mt-20 capitalize static ">
        <Link to={"/products"} className="no-underline ">
           <p className="text-gray-600 text-2xl " onClick={defaultClear}>Clear all filters</p>
           </Link>
            <div>
                {
                    SideData.map((item)=>{
                        const {id,name,value}=item

                        return(
                            <div >
                            <div key={id} onClick={()=>handleShow(id)} className="flex justify-between pt-10 items-center transition ease-in-out duration-700">
                                <h4 className="text-2xl">{name}</h4>
                                {show.find((item)=>item.id===id)?.value?<BsDash onClick={(e)=>{e.stopPropagation(); handleShow(id)}}/>:<BsPlus onClick={(e)=>{e.stopPropagation();handleShow(id)}}/>}
                              
                                </div>
                                <hr/>
                                {name==="types" &&type&&
        <FormTypes className="transition ease-out duration-1000 " data={data}/>
        
        }
        {
            name==="ratings"&&rating&&<FormRating/>
        }
        {
            name==="price"&&price&&<FormPrice/>
        }
        {
            name==="language"&&language&&<FormLanguage data={data}/>
        }
        {
            name==="discount"&&discount&&<FormDiscount/>
        }
                                </div>
                        )
                    })
                }
           
           
        </div>

        </div>
        
        </>
    )
}

export default productFilter