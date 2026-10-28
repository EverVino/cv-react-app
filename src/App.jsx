import { useState } from 'react'
import { GeneralInfo } from './components/GeneralInfo'
function App() {
    const [info, setInfo] = useState({
        name:"",
        email:"",
        phone:"",
        editing: true,
    })

    const handleClick = () => {
        const newInfo = {
            ... info,
            editing: !info.editing,
        }
        setInfo(newInfo)
    }
    
    return (
      <GeneralInfo 
        name={info.name} 
        email={info.email} 
        phone={info.phone} 
        editing={info.editing}
        callback= { handleClick }/>
    )
}

export default App
