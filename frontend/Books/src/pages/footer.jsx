import footerData from "../../footerData"
import {BsFacebook,BsTwitterX,BsInstagram,BsGoogle} from "react-icons/bs"

const Footer=()=>{
    return(
        <div className="bg-gray-800 text-white">
        <div className="  py-5 px-10 ">
            <div className="flex justify-around ">
                {
                    footerData.map(item=>{
                        const {id,title,content}=item
                        return(
                            <div className="" key={id}>
                                <p className="text-gray-400">{title}</p>
                                {
                                    content.map((value)=>{
                                      return(
                                        <p className="text-gray-300 hover:underline hover:text-gray-400 mb-3 capitalize">{value}</p>
                                      )
                                    })
                                }
                                </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-between mt-10">
                <div className="flex  text-gray-300 ">
                  <input type="text" placeholder="email" className="px-3 text-gray-600"/>
                  <div className="bg-gray-500 rounded-sm px-3 py-2 text-gray-900 font-medium hover:bg-gray-600 ">Join now</div>
                </div>
                <div className="flex gap-4 ">
                    <div className="flex gap-4">
                       <p className="hover:text-gray-400 hover:underline">For professionals</p>
                       <p className="hover:text-gray-400 hover:underline">Careers</p>
                       <p className="hover:text-gray-400 hover:underline">Contact us</p>
                       <p className="hover:text-gray-400 hover:underline">Company info</p>
                       <p className="hover:text-gray-400 hover:underline">Voluntary Recall</p>
                    </div>
                    <div className="flex gap-2 text-xl">
                        <div className=" px-2 flex justify-center items-center rounded-sm bg-gray-600"><BsFacebook className="hover:text-gray-400"/></div>
                        <div className="p-1 px-2 rounded-sm flex justify-center items-center bg-gray-600"><BsInstagram  className="hover:text-gray-400"/></div>
                        <div className="p-1 px-2 rounded-sm flex justify-center items-center bg-gray-600"><BsGoogle  className="hover:text-gray-400"/></div>
                        <div className="p-1 px-2 rounded-sm flex justify-center items-center bg-gray-600"><BsTwitterX  className="hover:text-gray-400"/></div>


                    </div>
                </div>
            </div>

        </div>
        <hr className="bg-white text-white"/>
        <div className="px-4">
        <p>&copy; {new Date().getFullYear()} Books! Cooperation of India</p>
        <div className=" text-white flex gap-2 text-lg">
        <p className="hover:text-gray-400 hover:underline">Terms and Conditions</p>
        <p className="hover:text-gray-400 hover:underline">Privacy Policy </p>
        <p className="hover:text-gray-400 hover:underline">Privacy Rights</p>
        </div>
      
        </div>
        </div>
    )
}

export default Footer