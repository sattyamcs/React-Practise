// CONTROLLED AND UNCONTROLLED FORM INPUTS
// In Controlled components the form data is handled by the React component. Whereas in uncontrolled component the Form data is handled by the DOM itself.

//Controlled >>>>Using React useState
//Uncontrolled>>> Using refs


import React,{useRef,useState} from 'react'

const ControlledUncontrolled = () => {
    const name  = useRef(null) //useRef is used here 
    // Here we use useState just to show it with the paragraph using conditions
    const[show,setShow]=useState(false);


    const SubmitHandler=(event)=>{
        event.preventDefault();
        console.log(name.current.value)
        name==""?alert("Please Fill Input"):setShow(true)
    }


  return (
    <div className='container'>
        <form onSubmit={SubmitHandler}>
        <h1>Uncontrolled way of form inputs</h1>
        <input type="text" id="name" placeholder='Please Input Text' ref={name}/>
        <button >Submit</button>
        </form>
        {/* Terenar operato to show para */}
        <h2>{show?`Hi ${name.current.value}`:""}</h2>
    </div>
  )
}

export default ControlledUncontrolled

