import { useOutletContext } from "react-router-dom"
const SingleProductDetail=()=>{

    const data=useOutletContext()
    const{_id,bookName,publishedDate,author,genre,languageAvailable}=data
    return(
        <div className="w-full">
        <div className="w-[86vw] m-auto" key={_id+1}>
            <div className="text-lg  font-medium">
            <p >Book name: <span className="font-normal text-gray-800">{bookName}</span></p>
            <p>Author: <span className="font-normal text-gray-800">{author}</span></p>
            <p>Genre: <span className="font-normal text-gray-800">{genre}</span></p>
            <p>Languages: <span className="font-normal text-gray-800">{languageAvailable}</span></p>


                 <p>Publisher: <span className="font-normal text-gray-800">Superbook Publishers Ltd.123 Imaginary Lane,Booktown, Fictionland,FL 54321</span></p>
              
                <p>PublishedDate: <span className="font-normal text-gray-800">{publishedDate}</span></p>
               

            </div>
            
        </div>
        </div>
    )
}

export default SingleProductDetail