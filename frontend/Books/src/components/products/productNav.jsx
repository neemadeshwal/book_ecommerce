import React, { useState } from "react"

import ProductContainer from "./productContainer"
import { Link,useSearchParams } from "react-router-dom"
import customFetch from "../../../utils"
import { useGlobalContext } from "../../context"
const productNav=({data})=>{
    const result=data.data

   

    const {setBestSeller,setNewArrival,setFeatured,defaultClear,bestSeller,featured,newArrival,
    ebooksAvailable,setEbooksAvailable,audioBooksAvailable,setAudioBooksAvailable
    }=useGlobalContext()

    
   
   
   
    function handleBestSeller(){
        setBestSeller(prevVal=>!prevVal)
    }
    function handleNewArrival(){
        setNewArrival(prevVal=>!prevVal)
    }
    function handleFeatured(){
        setFeatured(prevVal=>!prevVal)
       
    }

    function handleEbooksAvailable(){
        setEbooksAvailable(prevVal=>!prevVal)
    }

    function handleAudioBooksAvailable(){
        setAudioBooksAvailable(prevVal=>!prevVal)
    }
   
   



    return(
        <div className="w-[60vw]">
            <div>
        <div className="flex gap-4 mt-10 mb-8 items-center capitalize text-xl font-semibold ">

            <p  className={`border rounded-full  text-gray-500 px-4  py-2 ${bestSeller&&"bg-peach text-white"}`} onClick={handleBestSeller}>bestseller</p>
            <p  className={`border rounded-full  text-gray-500 px-4  py-2 ${newArrival&&"bg-peach text-white"} `} onClick={handleNewArrival}> new arrival</p>
            <p  className={`border rounded-full  text-gray-500 px-4  py-2 ${featured&&"bg-peach text-white"} `} onClick={handleFeatured}>featured</p>
            <p  className={`border rounded-full  text-gray-500 px-4  py-2 ${ebooksAvailable&&"bg-peach text-white"} `} onClick={handleEbooksAvailable}>Ebooks</p>
            <p  className={`border rounded-full  text-gray-500 px-4  py-2 ${audioBooksAvailable&&"bg-peach text-white"} `} onClick={handleAudioBooksAvailable}>AudioBooks</p>
          
            
        </div>
        
        </div>
        <ProductContainer/>
        </div>
        
    )
}

export default productNav