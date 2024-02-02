import { useOutletContext } from "react-router-dom"

import { currencyChange } from "../../functions";
const SingleProductBookFormat=()=>{
    const data=useOutletContext()
    const [firstFormat] = data.formats;

// Destructuring properties from the first item
const {
  paperback: { price: paperbackPrice },
  hardcover: { price: hardcoverPrice },
  ebook: { price: ebookPrice },
  _id
} = firstFormat
    return(
        <div className="w-[86vw] m-auto">
           <h1 className="text-2xl text-gray-600 mb-3">Book Formats :</h1>
           <div>
            <p className=" p-1 text-xl text-gray-700  ">Paperback: <span className="text-gray-500">&#8377; {currencyChange(paperbackPrice)}</span></p>
           </div>
           <div>
            <p className=" p-1 text-xl text-gray-700  ">Hardcover: <span  className="text-gray-500">&#8377; {currencyChange(hardcoverPrice)}</span></p>
           </div>
           <div>
            <p className=" p-1 text-xl text-gray-700  ">Ebook: <span  className="text-gray-500">&#8377; {currencyChange(ebookPrice)}</span></p>
           </div>
        </div>
    )
}

export default  SingleProductBookFormat