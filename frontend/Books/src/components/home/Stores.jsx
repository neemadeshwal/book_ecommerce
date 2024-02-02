import React from "react"

const Store=()=>{
    const [store1,setStore1]=React.useState(false)

    const [store2,setStore2]=React.useState(false)
    const Store1="Embark on a Literary Odyssey at Epic Tales Bookstore! Nestled in the heart of Mumbai's Storyville, Epic Tales is a haven for book lovers seeking a diverse range of literary treasures. With shelves adorned with classics, bestsellers, and hidden gems, our bookstore invites you to lose yourself in the magic of words. Our knowledgeable staff curates a collection that spans genres, ensuring there's something for every reader. Join us for author signings, book clubs, and an immersive reading experience that celebrates the beauty of storytelling."
    const Store2="Discover Enlightenment at Wisdom Words Book Bazaar! Located in the vibrant Bookish Nagar of Delhi, Wisdom Words is not just a bookstore; it's a sanctuary for those hungry for knowledge. Step into a world where the aroma of freshly printed pages mingles with the scent of brewed coffee. Our shelves showcase an array of thought-provoking reads, from philosophical treatises to the latest in non-fiction. Engage in literary discussions, attend book launches, and let Wisdom Words be your gateway to a world of intellectual exploration."
  
    function handleStore2(){
        setStore2(prevVal=>!prevVal)
    }
    function handleStore1(){
        setStore1(prevVal=>!prevVal)
    }
  const Store2Data=store2?Store2:Store2.slice(0,110)
  const Store1Data=store1?Store1:Store1.slice(0,110)

    return(
        <div className="w-[90vw]  mx-auto my-28">
            <div>
                <h1 className="text-center mb-16 text-gray-700  ">Explore our Stores</h1>
            </div>
            <div className="flex gap-20  justify-between ">
           <div className="w-[43vw] ">
            <div className="border px-0 py-3 flex justify-center font-poppins ">

            <div className="w-[40vw] h-[67vh] overflow-hidden">
            <img 
            className="w-[40vw] h-[67vh] rounded-md font-poppins hover:scale-[1.15] transform transition ease-in-out duration-700"
            src="https://assets.vogue.com/photos/5949758c9d94cb14039aa465/master/w_1600%2Cc_limit/09-best-new-york-city-bookstores.jpg" alt=""/>
           </div>
           </div>
           <div className="px-6 py-4">
           <p className="text-4xl ">Ink and Quill</p>
            <p className="text-xl text-gray-500 w-[20vw] leading-8">
            456 Literary Avenue,
            Bookish Nagar, Delhi 110002,
            India
            </p>
            <p className="font-poppins">{Store2Data}<span onClick={handleStore2} className="font-semibold transition ease-in-out duration-500 cursor-pointer hover:text-peach font-serif"> {store2?"Read less":"... Read more"}</span></p>
           </div>
          

           </div>
           <div className="font-poppins w-[43vw]">
           <div className="border py-3 px-0 flex justify-center">
           <div className="w-[40vw] h-[67vh] overflow-hidden">
           <img 
           className="w-[40vw] h-[67vh] rounded-md  hover:scale-[1.15] transform transition ease-in-out duration-700"
           src="https://assets.vogue.com/photos/594830328ba2821cdbcb950f/master/w_1600%2Cc_limit/01-best-new-york-city-bookstores.jpg" alt=""/>
            </div>
            </div>
            <div className="px-6 py-4">
            <p className="text-4xl font-poppins">Argosy</p>
            <p className="text-xl text-gray-500 w-[20vw] leading-8">789 Novel Street,
            Storyville, Mumbai 400001,
            India</p>
            <p className="">{Store1Data}<span className="font-semibold cursor-pointer  hover:text-peach" onClick={handleStore1}> {store1?"Read less":"... Read More"}</span></p>
            </div>
           
           </div>
        </div>
        </div>

    )
}

export default Store