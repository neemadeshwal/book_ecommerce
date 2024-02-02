
import React, { useState } from "react"
import ProductGrid from "./productGrid"
import ProductList from "./productList"
import { useSearchParams } from "react-router-dom"
import {BsChevronLeft, BsChevronRight, BsGridFill,BsList} from "react-icons/bs"
import customFetch from "../../../utils"
import { useGlobalContext } from "../../context"

const productContainer=()=>{
    const[searchParams]=useSearchParams()
    const [list,setList]=React.useState(false)

    const [page,setPage]=React.useState(1)

    const[getFilteredData,setFilteredData]=React.useState([])

    const{sort,setSort}=useGlobalContext()
    const getBooks=searchParams.toString()?`/api/v1/books?${searchParams.toString()}`:`/api/v1/books`
    React.useEffect(()=>{
     async function fetch (){
        try{
            
            const data=await customFetch.get(getBooks)
            const result=await data.data.data
            setFilteredData(result)
        }
        catch(err)
        {
           console.log(err)
        }
        
         
     }
     fetch()
    },[searchParams])

    function handleList(){
        setList((prevVal)=>!prevVal)
      }

      function handlePaginate(e){
        const {id}=e.target
        if(id==="previous"&&page>1){
            setPage(prevVal=>prevVal-1)
        }
        else if(id==="next"&&page<paginateArray.length){
            setPage(prevVal=>prevVal+1)
        }
        else {
            
            const val=Number(id)
            setPage(val)
        }
      }

    const itemsPerPage=10

      console.log(page)
    const paginateNum=Math.ceil(getFilteredData.length/itemsPerPage)
    const startIndex=(page-1)*itemsPerPage
    const EndIndex=startIndex+itemsPerPage
    const paginateArray=Array.from({length:paginateNum},(_,index)=>index+1)
    
    
   
    const paginatedData=getFilteredData.slice(startIndex,EndIndex)
    function handleSort(e){
        setSort(e.target.value)

    }

    

    return(
        <div>
        <div>
<div className="flex  justify-between text-lg m-6">
            <div className="flex gap-10">
            <div className="flex gap-3 text-3xl " >
            <BsGridFill onClick={handleList} className={`border border-gray-500 p-[5px] w-8 h-8 rounded ${!list&& "select"}`}/>
            <BsList onClick={handleList} className={`border border-gray-500 p-[5px] w-8 h-8 rounded ${list&& "select"}`}/>
            </div>
            <div>
                <p>{getFilteredData.length} items found</p>
            </div>
            </div>
            <hr className=" bg-black w-[30%]"/>
            {/* <div className="h-[1px] mx-2 w-[80%] bg-black mt-10"></div> */}

            <div className=" " >
                <label htmlFor="sortby">Sort by  </label>
                
                <select className="pr-2 mx-4 border rounded p-1" id="sortby" value={sort} onChange={handleSort}>
                    <option className="" value="bookName">a-z</option>
                    <option value="!bookName">z-a</option>
                    <option value="price">price:High to low</option>
                    <option value="!price">price:Low to high</option>
                    <option value="ratings">Ratings</option>
                    <option value="!ratings">better discount</option>


                </select>
            </div>
           

        </div>
        </div>
       
        {
            list?<ProductList data={paginatedData}/>:<ProductGrid data={paginatedData}/>
        }
        <div className="flex justify-center">
        <div className="flex gap-4 text-xl my-20  font-medium  ">
        <BsChevronLeft className="mt-2" name="previous" id="previous" onClick={handlePaginate}/>
        {paginateArray.map((item)=>{
           return(
             <p id={Number(item)} className={`ml-4 rounded-full  py-2 px-3 ${page===Number(item)?"bg-peach text-white":"bg-gray-100 text-gray-700"} `} onClick={handlePaginate}>{item} </p>
             )
        })}
        <BsChevronRight onClick={handlePaginate} name="next" id="next" className="mt-2 "/>
        </div>
        </div>
        </div>
    )
}

export default productContainer