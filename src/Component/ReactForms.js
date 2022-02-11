import React,{useState} from 'react';

const ReactForms = () => {

    const [name, setName] = useState();
    const[fullName,setFullname]=useState();
    const inputEvent=(event)=>{
        console.log(event.target.value.length)
        setName(event.target.value)
    }
    const submit=()=>{
        setFullname(name)
    }

    // In controlled components the form data is handled by the react component  and alternatively in uncontrolled component form data is controlled by the DOM. 

  return <div className='container'>

      {/* This is the controlled component because it is handled by the react component */}
      <h1>Hello {fullName}</h1>
      <input type="text" placeholder='write your name' onChange={inputEvent} value={name}/>
      <button onClick={submit}>Submit</button>
  </div>;
};

export default ReactForms;
