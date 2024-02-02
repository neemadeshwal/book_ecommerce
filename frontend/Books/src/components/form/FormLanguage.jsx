import { useGlobalContext } from "../../context"
const language=({data})=>{
    const result=data.data
    let language=[]

let languageData=[]
   result.map((item)=>{
            const {id,languageAvailable}=item


            language.push(languageAvailable)

            

    })
    const newVAl=[...new Set(language)]
    newVAl.map((item,index)=>{
        languageData.push({id:index+1000,language:item})
    })


    const {languages,setLanguages}=useGlobalContext()
    console.log(languages)
    function handleChange(e){
        if(e.target.checked){
             setLanguages((prevVal)=>[...prevVal,e.target.name])
        }
        else{
            setLanguages((prevVal)=>prevVal.filter((item)=>item!==e.target.name))
        }
    }
    return(
        <div>
            {
                languageData.map((item)=>{
                    const {id,language}=item
                    return(
                        <div key={id} className="flex gap-2 items-center text-lg mb-2">
                            <input type="checkbox" name={language} id={language} onChange={handleChange}/>
                            <label className="mb-0 " htmlFor={language}>{language}</label>
                            </div>
                    )
                })
            }
        </div>
    )
}

export default language