



import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { useGlobalContext } from "../../context";
function FormPrice() {

	const {numericFilters,setMinValue,setMaxValue,setNumericFilters,minValue,maxValue}=useGlobalContext()
const handleInput = (e) => {
	setMinValue(e.minValue);
	setMaxValue(e.maxValue);
	setNumericFilters(true)
};

return (
	<div className="App">
		<MultiRangeSlider
      style={{border:"none",boxShadow:"none",width:"15vw"
   }}
			min={200}
			max={2000}
			step={5}
			minValue={minValue}
			maxValue={maxValue}
      ruler="false"
      label="false"
      barInnerColor="#f6a192"
      barLeftColor="whitesmoke"
      barRightColor="whitesmoke"
			onInput={(e) => {
				handleInput(e);
			}}
		/>
		<div className="flex gap-20 items-center">
			<div className="w-8"> 
				<label htmlFor="minVal">Minimum</label>
			<input type="number" value={minValue} className="border rounded p-1 w-20"  name="minVal" id="minVal"/>

			</div>
			<div className="w-8">
				<label htmlFor="maxVal">Maximum</label>
			<input type="number" value={maxValue} className="border rounded p-1 w-20" name="maxVal" id="maxVal"/>

			</div>
		</div>
	</div>
	);
}

export default FormPrice;



// import React from "react"
// const FormPrice=()=>{

//     const[minVal,setMinVal]=React.useState(300)
//     const[maxVal,setMaxVal]=React.useState(700)

    
  
//     //   const rangeSelectedStyle = {
//     //     height: "100%",
//     //     left: `calc(${(minVal / 2000) * 100}%)`,
//     //     right: `calc(${((2000 - maxVal) / 2000) * 100}%)`,
//     //     position: "absolute",
//     //     width: `calc(${((2000 - maxVal + minVal) / 2000) * 100}%)`,
//     //     textAlign: "center",
//     //     borderRadius: "5px",
//     //     backgroundColor: "#f44344",
//     //     transition: "left 0.3s ease-in-out, right 0.3s ease-in-out, width 0.3s ease-in-out",
//     //   };
//       const rangeSelectedStyle = {
//         height: "100%",
//         left: `calc(${(minVal / 2000) * 100}%)`,
//         right: `calc(${((2000 - maxVal) / 2000) * 100}%)`,
//         position: "absolute",
//         width: `calc(${((maxVal - minVal) / 2000) * 100}%)`,
//         textAlign: "center",
//         borderRadius: "5px",
//         backgroundColor: "#f44344",
//         transition: "left 0.3s ease-in-out, right 0.3s ease-in-out, width 0.3s ease-in-out",
//       };

//       function handleChange(e){
//          if(e.target.name==="min"){
//             setMinVal(e.target.value)
//          }
//          if(e.target.name==="max"){
//             setMaxVal(e.target.value)
//          }
//       }
      
      
    
//     return(
//         <div className="range mb-20">
//            <div className="range-slider">
//             <span  className="range-selected"></span>
//             <div>

//             </div>
//             <div className="range-input">
//                 <input className="" type="range" min="0" max="500" step="5" value={minVal} name="min" onChange={handleChange} /> 
//                 <input type="range" min="510" max="990" step="5" value={maxVal} name="max" onChange={handleChange} /> 


//             </div>
//             <div className="range-price  ">
//                 <label htmlFor="min">Min</label>
//                 <input type="number" name="min" id="min" value={minVal}/>
//                 <label htmlFor="max">Max</label>
//                 <input type="number" name="max" id="max" value={maxVal}/>
//             </div>
//            </div>
//         </div>
//     )
// }

// export default FormPrice