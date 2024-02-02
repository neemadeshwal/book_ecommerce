import React from "react"
import { BsChevronRight,BsChevronLeft } from "react-icons/bs"

const ReviewData=[
      {
            id:"1a1",
            img:  "https://www.shutterstock.com/image-photo/headshot-portrait-smiling-young-indian-260nw-2029044050.jpg"      ,
            name:"Aisha Singh",
            review:"I recently made a purchase on this e-commerce book website, and I couldn't be happier with the experience. The website is user-friendly, making it easy to navigate and find the books I was looking for. The checkout process was smooth, and I appreciated the variety of payment options available. The books arrived promptly, well-packaged, and in excellent condition. The quality of service and the extensive collection of books have made me a loyal customer. Highly recommended!"
      },
      {
            id:"2a2",
            name:  "Rohan Patel"      ,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2t-r7v3uF3IXpChgaqnC7s8g4XMSRt0XN-g&usqp=CAU",
            review:"I recently discovered this e-commerce book haven, and I'm thoroughly impressed! Navigating the website is a joy, with its user-friendly design and intuitive search options. The vast selection of books across genres is commendable, offering something for every reader's taste. The checkout process is smooth, and the quick delivery exceeded my expectations. Overall, a seamless and delightful experience for book lovers!"
      },
      {
            id:"3a3",
            name:  "Arjun Sharma"      ,
            img:"https://img.freepik.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705708800&semt=ais",
            review:"This e-commerce book website is a dream for any avid reader! The website's layout is visually appealing, making it easy to get lost in the world of literature. The curated collection boasts an impressive array of titles, from classic literature to contemporary bestsellers. Ordering was a breeze, and the prompt delivery showcased their commitment to customer satisfaction. For book enthusiasts seeking a diverse and well-curated selection, this website is a must-visit!"
      },
]

const Reviews=()=>{

    const ref=React.useRef(null)
    const handleClick=(direction)=>{
      const scrollAmount=1400
      const scrollOffset=direction==="left"?-scrollAmount:scrollAmount

      if(ref.current){
            ref.current.scrollBy({
                  left:scrollOffset,
                  behavior:'smooth'
            })
      }
    }
    return(
        <div className="w-[100vw] h-[100vh] px-0 m-0 py-2 relative ">
             <h4 className="text-4xl text-center absolute left-[38vw] text-gray-500 top-7">What <span className="text-peach">Client Says</span>:</h4> 
        <div className="dark w-[100vw] flex justify-between    overflow-hidden h-full transition ease-in-out duration-500   " ref={ref}>
         
            {
            <BsChevronLeft onClick={()=>handleClick('left')} id="previous" className="absolute top-[40%] left-20 text-white text-6xl hover:text-peach font-bold"/>
            
            }
            {
           
            <BsChevronRight onClick={()=>handleClick('right')} id="next" className="absolute top-[40%] right-32 text-white text-5xl font-bold hover:text-peach"/>
            }
            
            {
                  ReviewData.map((item)=>{
               const {id,img,name,review}=item

                 
           return(
          <div className="w-[100vw] max-w-[100vw] flex justify-center   mt-24 m-auto">
                 
                  
                                   
                  <div key={id} className="p-24   text-center  w-[100vw] h-full" >
                  <img
                  
                  className="rounded-full w-40 h-40 mx-auto mb-10 object-fit   border-3 border-yellow-200 "
                  src={img} alt=""/>
                  <div className="w-[70vw] m-auto">
                  <p className="text-yellow-200 text-2xl font-light tracking-wider">{review}</p>
                  <p className="text-5xl mt-7 text-yellow-200">{name}</p>
                             </div>
                                     </div>    
                              
              
           
            </div>)})}
         
        </div>
        </div>
    )
}

export default Reviews