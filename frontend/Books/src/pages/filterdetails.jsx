
import customFetch from "../../utils"
const filterTypes=async()=>{
    try{
        const result=await customFetch.get("/api/v1/books/")
        const data= await result.data
        return data

    }
    catch(err)
    {
        console.log(err)
    }


}
let BookTypes=[]

const typesArray=async()=>{
    try{
        const typeData=await filterTypes()
        const result=await typeData.data
        
        const genre=result.map((item)=>{
            const{id,genre}=item
        
        
            newVal.push(genre)
        
        })
        
        const newvals=[...new Set(newVal)]
        
    }
    catch(err){
        console.log(err)
    }


}

typesArray()

export {BookTypes}