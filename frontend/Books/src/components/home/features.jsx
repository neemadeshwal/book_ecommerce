import features from "../../../featuresData"

const Features=()=>{
    return(
        <div className="flex items-center justify-center w-full">
        <div className="flex gap-10 my-28 mb-20  w-5/6 ">
          {
            features.map((item)=>{
                const {id,img,title,content}=item
                return(
                    <div key={id} className="flex gap-6 p-4">
                       <img src={img} alt="img" className="w-14 h-14 "/>
                       <div className="">
                        <h3 className="text-2xl">{title}</h3>
                        <p className="font-xl text-gray-600">{content}</p>
                        </div>
                    </div>
                )
            })
          }
        </div>
        </div>
    )
}

export default Features