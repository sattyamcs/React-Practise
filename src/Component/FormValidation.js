import React,{useState} from 'react'

const FormValidation = () => {
  const[user,setUser]=useState("")
  const[password,setPassword]=useState("")
  const[err,setErr]=useState(false);
  const[Pass,setPass]=useState(false);

  function loginHandel(e){
    if(user.length<3||password.length<3){
      alert("Invalid information")
    }else{
      alert("Login Successfully")
    }
    // e.preventDefault()   //This helps to ignore reloading when ever submitted.
    // console.log("Hello Login user")
  }
  //whenever we trigger onchange it passed object that is e here.
  function userHandler(e){
    let value=e.target.value.length
    if(value<3){
      setErr(true)
    }else{
      setErr(false)
    }
    setUser(value)
  }
  function passHandler(e){
    let value=e.target.value.length
    if(value<3){
      setPass(true)
    }else{
      setPass(false)
    }
    setPassword(value)
  }
  return (
    <div className='container' >
        <form style={{padding:"10px 0"}} onSubmit={loginHandel}>
        <input type="text" placeholder='Enter Id' onChange={userHandler}/><br />{err?<span>Invalid User</span>:""}<br /><br />
        <input type="text" placeholder='Enter Password' onChange={passHandler} /><br />{Pass?<span>Password invalid</span>:""}<br /><br />
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}
//Onchange is used for collecting data
export default FormValidation;