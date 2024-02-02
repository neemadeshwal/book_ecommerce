import ProductNav from "../components/products/productNav"
import ProductFilter from "../components/products/productFilter"

import customFetch from "../../utils"
import React from "react"

import { useLoaderData, useSearchParams } from "react-router-dom"
import { useGlobalContext } from "../context"

const BooksUrl="/api/v1/books"

const ProductLoader=async()=>{
    try{
      
        const result=await customFetch.get(BooksUrl)
        return await result.data
    }
    catch(err){
        console.log(err)
    }
    return 
}


const Products=()=>{
    const data=useLoaderData()

    const [searchParams,setSearchParams]=useSearchParams()
    const {rating,type,discount,languages,bestSeller,clear,featured,newArrival,ebooksAvailable,audioBooksAvailable,numericFilters,minValue,maxValue,sort,search}=useGlobalContext()

    React.useEffect(() => {
        const sp = new URLSearchParams(searchParams);
        if(clear){
            setSearchParams({})
        }
        else{
        if (bestSeller===true) {
            sp.set("bestseller", bestSeller);
          } else {
            sp.delete("bestseller");
          }

          if (newArrival) {
            sp.set("newArrival", newArrival);
          } else {
            sp.delete("newArrival");
          }

          if(numericFilters){
              let filters=""
            if(rating){
               filters+=`ratings>=${rating},`
            }
            
            if(discount){
                filters+=`discount>=${discount},`
                
            }
            
              const convertMin=Math.round(Number(minValue)/30)
              const convertMax=Math.round(Number(maxValue)/30)

              filters+=`price<=${convertMax},price>=${convertMin}`
              
           
           
            sp.set("numericFilters",filters)

            if(!filters){
                sp.delete("numericFilters")
            }}
            else{
                sp.delete("numericFilters")
            }

          if (featured) {
            sp.set("featured", featured);
          } else {
            sp.delete("featured");
          }
          if(sort){
            sp.set("sort",sort)

          }
          else{
            sp.delete("sort")
          }
           
         
         if(search){
          sp.set("search",search)
         }
         else{
          sp.delete("search")
         }
      
        if (type.length>0 ) {
          const types = type.join(',');
          sp.set("genre", types);
        } else {
          sp.delete("genre");
        }
      
        if (languages.length>0 ) {
          const languageString = languages.join(",");
          sp.set("languageAvailable", languageString);
        } else {
          sp.delete("languageAvailable");
        }
        if (ebooksAvailable) {
            sp.set("ebooksAvailable", ebooksAvailable);
          } else {
            sp.delete("ebooksAvailable");
          }
          if (audioBooksAvailable ) {
            sp.set("audioBooksAvailable", audioBooksAvailable);
          } else {
            sp.delete("audioBooksAvailable");
          }
        
        
        
        setSearchParams(`?${sp.toString()}`);}
      
      }, [rating, discount, type, languages,bestSeller,newArrival,featured,ebooksAvailable,audioBooksAvailable,numericFilters,minValue,maxValue,sort,search]);
      
   
    


    return(
       <div className="flex justify-center ">
        <ProductFilter data={data}/>
        <div className="mr-20">
        <ProductNav data={data}/>
       </div>
       </div>
    )
}

export default Products
export {ProductLoader}