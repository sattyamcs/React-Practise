import React,{useRef} from 'react'


//The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.


const ReactUseRef = () => {
    let inputRef= useRef(null) //Defined in a variable and use where DOM we want to manipulate
    function manipulateDom(){
        console.log("clicked")
        inputRef.current.value=("1000")   //Here this we can manipulate Dom
        inputRef.current.style.color="red`"   //Here this we can manipulate Dom
    }

  return (
    <div className='container'>
        <h1>Hello User</h1>
        <input type="text" style={{padding:"10px 10px"}} placeholder="Please enter text here" ref={inputRef}/>
        <button onClick={manipulateDom}>Click me</button>
    </div>
  )
}

export default ReactUseRef