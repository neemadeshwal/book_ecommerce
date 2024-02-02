import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import {Link} from "react-router-dom"
import toast,{ Toaster } from 'react-hot-toast';
const Hero=()=>{
    const [index, setIndex] = useState(0);
      
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    }
    return(
      <div className='bg-gray-50 h-[600px] py-12 mx-0'>
        <div className='w-full flex justify-between gap-10   h-96   '> 
            <div className='pl-20 pt-32 w-2/5 ' >
                <h1 className='text-6xl font-semibold font-poppins'>
                    Buy your <span className='text-peach'>Best</span> books <span className='text-peach'>here.</span>
                </h1>
                <p className='py-6 text-lg font-poppins font-medium  '>Dive into a world of words, where stories unfold and imaginations soar - the joy of reading books.</p>
             <Link to="/products" className="no-underline">
              <button   className='bg-gray-900  text-white rounded-full px-4 py-3 font-normal text-2xl hover:bg-peach transition duration-400 ease-in-out '>Explore</button>
             <Toaster/>
              </Link>
            </div>
            <div className='w-3/5 m-0 '>
            <Carousel className='' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='' interval={4000}>
      <div className='slide-img-container '>
        
        <img style={{objectFit:"cover"}} className='slide-img w-full h-[500px] rounded-md' src="../assets/book1.jpeg" alt="img-1"/>
       </div>
       
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <div className='slide-img-container'>
        <img style={{objectFit:"cover"}} className="slide-img w-full h-[500px] rounded-md" src="../assets/book2.jpg" alt="img2" />

        </div>

      
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <div className='slide-img-container'>

      <img style={{objectFit:"cover"}} className='slide-img w-full h-[500px] rounded-md' src="../assets/book3.jpg" alt="img-3"/>
</div>
      
      </Carousel.Item>
   
    
      
      <Carousel.Item interval={4000}>
      <div className='slide-img-container'>

      <img style={{objectFit:"cover"}} className='slide-img w-full h-[500px] rounded-md' src="../assets/book5.jpg" alt="img-3"/>
</div>
      
      </Carousel.Item>
      </Carousel>
            </div>
        </div>
        </div>

    )
}

export default Hero