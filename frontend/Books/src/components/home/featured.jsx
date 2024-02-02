
import React from "react"
import customFetch from "../../../utils/index"
import { useLoaderData,Link } from "react-router-dom"
import {BsStarFill,BsStarHalf,BsStar,BsChevronRight, BsChevronLeft} from "react-icons/bs"
import {starRatings,currencyChange} from "../../functions"
const imagePath="../../public/uploads/";

const BooksUrl="/api/v1/books?featured=true"
const FeaturedLoader=async()=>{
 const result=await customFetch.get(BooksUrl)
 return await result.data
}

const Featured=()=>{

    const data=useLoaderData()  
    const featuredBooks=data.data

  

    const[isHover,setIsHover]=React.useState(false)

    function handleMouseIn(){
        setIsHover(true)
    }
    function handleMouseOut(){
        setIsHover(false)
    }
    
    const ref=React.useRef(null)

    const handleClick=(direction)=>{
      
        const scrollAmount = 400
    const scrollOffset = direction === 'left' ? -scrollAmount : scrollAmount;

    if (ref.current) {
        ref.current.scrollBy({
            left: scrollOffset,
            behavior: 'smooth',
        });}
    
       
    }
    return(
        <div className="h-full p-4 pt-0  mb-10 relative  ">
          
            <div className="relative ">
                <h1 className="text-center text-5xl font-semibold font-poppins mb-0">Featured <span>Books</span></h1>
                
                <div className="w-36 h-2 left-[47%] bottom-[-1.3rem]   bg-peach  rounded-sm absolute"></div>
            </div>
            <div className="flex justify-between p-20 overflow-hidden gap-16 scroll-smooth transition ease-in-out duration-500" ref={ref}  onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                  {isHover&&
            <>
            <button onClick={()=>handleClick('right')} className=" absolute p-2 right-5 top-[33%]  rounded-full hover:border-2 text-gray-500 hover:text-peach hover:border-peach transition ease-in-out duration-500">
            <BsChevronRight  className="    w-10 h-10 "/>
            </button>
            <button onClick={()=>handleClick('left')} className=" absolute p-2 left-10 top-[33%]  rounded-full  hover:border-2 text-gray-500 hover:text-peach hover:border-peach transition ease-in-out duration-500 ">
                <BsChevronLeft   className=" w-10 h-10 "/>

            </button>
            </>}
                {
                
                    featuredBooks.map((item)=>{
                        const {_id,bookName,price,genre,image,ratings}=item
                        
                        return(
                            <Link to={`products/${_id}`} className="no-underline">
                                <div className="flex justify-center items-center">
                                    
                            <div key={_id} className="shadow-sm w-[18.2rem]  rounded-md hover:shadow-xl hover:border-2 hover:border-gray-200 duration-500">
                                <div className="bg-purple-50 flex justify-center  items-center w-72 h-72">
                                <img src={`${imagePath}${image}`} className="w-52 h-56 " alt="img"/>
                                </div>
                                <div className="p-6 pb-0 mb-0 font-poppins">
                                <h3 className="text-xl text-gray-800">{bookName}</h3>
                                <p className="text-peach text-lg font-semibold">&#8377;{currencyChange(price)}</p>
                                <p className="flex gap-3 items-center"><p className="text-yellow-500 font-semibold mt-3">{ratings}</p>{

                                    
                                 starRatings(ratings)
                                    // array.map((item)=>{
                                    //     return(
                                    //         <div className="">
                                    //      {item}

                                    //         </div>
                                    //     )
                                    // })
                                    }</p>
                                 </div>
                                </div>
                                </div>
                                </Link>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Featured
export {FeaturedLoader}