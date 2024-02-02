import React, { useContext } from "react";



const AppContext=React.createContext()


const AppProvider=({children})=>{

    const[discount,setDiscount]=React.useState(null)
    const[languages,setLanguages]=React.useState([])
    const[rating,setRating]=React.useState(null)
    const[type,setType]=React.useState([])
    const[featured,setFeatured]=React.useState(false)
    const[newArrival,setNewArrival]=React.useState(false)
    const[bestSeller,setBestSeller]=React.useState(false)
    const[ebooksAvailable,setEbooksAvailable]=React.useState(false)
    const[audioBooksAvailable,setAudioBooksAvailable]=React.useState(false)
    const[numericFilters,setNumericFilters]=React.useState(false)
    const[buyNowBook,setBuyNowBook]=React.useState({})

    const [minValue, setMinValue] = React.useState(200);
const [maxValue, setMaxValue] = React.useState(2000);
const [sort,setSort]=React.useState(null)

const[search,setSearch]=React.useState("")


   

    function defaultClear(){
        setBestSeller(false)
        setNewArrival(false)
        setFeatured(false)
        setType([])
        setDiscount(null)
        setLanguages([])
        setRating(null)
        setAudioBooksAvailable(false)
        setEbooksAvailable(false)
        setNumericFilters(false)
        setMaxValue(2000)
        setMinValue(200)

    }
    return(
        <AppContext.Provider value={{
            discount,setDiscount,languages,setLanguages,rating,setRating,type,setType,newArrival,setNewArrival

          ,bestSeller,setBestSeller,featured,setFeatured ,defaultClear,ebooksAvailable,setAudioBooksAvailable,setEbooksAvailable,audioBooksAvailable,
          numericFilters,setNumericFilters,minValue,setMinValue,maxValue,setMaxValue,sort,setSort,search,setSearch,buyNowBook,setBuyNowBook
        }} >
          {children}
        </AppContext.Provider>
    )
}

 const useGlobalContext=()=>{
    return useContext(AppContext)
}

export{AppProvider,useGlobalContext}