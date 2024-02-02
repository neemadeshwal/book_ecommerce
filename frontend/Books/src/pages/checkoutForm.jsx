
import toast,{ Toaster } from "react-hot-toast"
import React from "react"
const CheckoutForm=()=>{
  const [displayMsg,setDisplayMsg]=React.useState("success")
  const [info,setInfo]=React.useState({
    name:"",
    address:"",
    phno:null

  })

  function handleChange(e){
const {name,value}=e.target
console.log(name,value)
setInfo(prevVal=>({...prevVal,[name]:value}))
  }


  function handleOrder(){
    console.log(displayMsg)
    console.log(info)
    if(displayMsg==="success"){
      toast.success("Order placed successfully")

    }
    else{
      toast.error("Please fillout the form")
    }
  }
  React.useEffect(()=>{
    if (info.name!==""&&info.address!==""){
      setDisplayMsg("success")
    }
    else{
      setDisplayMsg("Error")
    }
  },[info])
  return(
    <div>
           <div className="w-[30vw]">
                <div>
                    <p className="text-2xl mt-3 text-gray-700">Shipping Information</p>
                </div>
                <div>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <input onChange={handleChange} value={info.name} className="rounded px-4 py-2 text-xl border w-full mb-4" name="name" type="text" placeholder="your name"/>
                    <input onChange={handleChange} value={info.address} className="rounded px-4 py-2 text-xl  border w-full mb-4"name="address" type="text" placeholder="your full address"/>
                    <input onChange={handleChange} value={info.phno} className="rounded px-4 py-2 text-xl border w-full mb-8"name="phno" type="number" placeholder="your phone number"/>
                    <button onClick={handleOrder} className="w-full rounded bg-peach text-white hover:bg-red-600 py-2 px-4 text-xl">Place your order</button>
                    <Toaster  toastOptions={{
    
                    duration: 3000,
                       }}
                      />
                </form>
                </div>
            </div>
    </div>
  )
}

export default CheckoutForm

