import { useState } from 'react'
import { GeneralInfo } from './components/GeneralInfo'
import { EducationInfo } from './components/Education'
import { WorkExp } from './components/WorkExp'

function App() {
    const [info, setInfo] = useState({
        name: "",
        email: "",
        phone: "",
        editing: true,
    })

    const [education, setEducation] = useState({
        title: "",
        school: "",
        date: "",
        editing: true,
    })

    const [workExp, setWorkExp] = useState({
        institution: "",
        position: "",
        startDate: "",
        endDate: "",
        editing: true,
    })

    function handleSubmit (event) {
        event.preventDefault();
        const form = event.currentTarget;

        const data = new FormData(form);
        let formData = Object.fromEntries(data.entries());
        
        if( Object.keys(formData).length === 0 ){
            formData = info; 
        }
        const newInfo = {
            ... formData,
            editing: !info.editing,
        }
        setInfo(newInfo)
        
    }

    function handleEduForm (event){
        event.preventDefault();
        const form = event.currentTarget;

        const data = new FormData(form);
        let formData = Object.fromEntries(data.entries());
        
        if( Object.keys(formData).length === 0 ){
            formData = education; 
        }
        const newEduInfo = {
            ... formData,
            editing: !education.editing,
        }
        setEducation(newEduInfo)
    }

    function handleWorkForm (event){
        event.preventDefault();
        const form = event.currentTarget;

        const data = new FormData(form);
        let formData = Object.fromEntries(data.entries());
        if( Object.keys(formData).length === 0 ){
            formData = workExp; 
        }
        const newWorkExp = {
            ... formData,
            editing: !workExp.editing,
        }
        setWorkExp(newWorkExp)
    }

    return (
        <>
        <GeneralInfo 
          name={info.name} 
          email={info.email} 
          phone={info.phone} 
          editing={info.editing}
          callback= { handleSubmit }/>
        <EducationInfo 
          title={education.title} 
          school={education.school} 
          date={education.date} 
          editing={education.editing}
          callback= { handleEduForm }/>
        <WorkExp 
          institution={workExp.institution} 
          position={workExp.position} 
          startDate={workExp.startDate}
          endDate={workExp.endDate} 
          editing={workExp.editing}
          callback= { handleWorkForm }/>
        </>
    )
}

export default App
