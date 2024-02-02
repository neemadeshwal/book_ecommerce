

const About=()=>{
    return(
        <div className="p-28 pt-10 font-poppins">
        <div className="flex justify-between gap-20">
            <div className="pt-5">
               <img src="../assets/books1gif.gif" className="w-[700px] h-[400px] object-fit" alt=""/>
            </div>
            <div className="w-3/5">
              <div className="relative m-3 pb-4 "> 
            <h1 className="font-semibold  text-5xl " >About us</h1>
            <div className="absolute left-[5rem] rounded w-20 h-1 bg-peach "></div>
            </div> 
            <h3 className="text-2xl pb-4">Epic Reads Emporium: Your Gateway to Literary Exploration</h3>
            <p className="text-gray-500 font text-xl ">At Epic Reads Emporium, we are not just a bookstore; we are a community
            of avid readers and literary enthusiasts. Our online platform is dedicated to
             providing an immersive and curated experience for book lovers of all genres.</p>
             <p className="text-gray-500 font text-xl">
              As your ultimate gateway to literary exploration, we take pride in offering 
              a diverse collection that spans classic literature, contemporary bestsellers,
               niche genres, and thought-provoking non-fiction.</p>
            </div>
           
        </div>
        </div>
    )
}

export default About