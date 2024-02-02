import React from "react"

import { Link } from "react-router-dom"
import { useGlobalContext } from "../../context"
const discount=()=>{

    const {discount,setDiscount,numericFilters,setNumericFilters}=useGlobalContext()
    console.log(discount)

    const discountArray=[]
    for(let i=1;i<=5;i++){
        discountArray.push({id:10000,discount:i})
    }
    const [selectDiscount,setSelectDiscount]=React.useState(null)

    function handleDiscount(e){
         setSelectDiscount(e.target.name)
         const val=Number(e.target.value)
         setDiscount(val)
         setNumericFilters(true)

        



         
                
    }
   

    return(
        <div>
           {
            discountArray.map((item)=>{
                const {id,discount}=item
                return(
                    <div key={id} className="flex items-center gap-2 mb-3" 
                    
                    >
                        <input
                        key={id+100}
                        name={discount}
                        id={discount}
                         className="rounded-[50%]"
                          type="checkbox"
                           onChange={handleDiscount}
                           value={discount}
                           checked={discount&&selectDiscount==discount}
                           />
                        <label htmlFor={discount} className="mb-0">{discount*10}% and above</label>
                    </div>
                )
            })
           }
        </div>
    )
}

export default discount