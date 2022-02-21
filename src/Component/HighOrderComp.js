// React high order component is a technique where it takes a component as a props and return new component. It is used for component reusing logic 
// A higher-order component is a function that takes a component and returns a new component.

import React,{useState} from 'react'

//This is the main component and taking a component as a props
const HighOrderComp = () => {
  return (
    <div className='container'>
        <RedComp comp={Counter}/>
        <GreenComp comp={Counter}/>
        <YellowComp comp={Counter}/>
    </div>
  )
}
//Now these are the functions where that component as a props is passed  
function RedComp(props){
    return(
        <div style={{color:"white", border:"4px solid white",backgroundColor:"red" , width:"300px"}}>
        <props.comp/>
        </div>
    )
}
function GreenComp(props){
    return(
        <div style={{color:"white", border:"4px solid white",backgroundColor:"green" , width:"300px"}}>
        <props.comp/>
        </div>
    )
}
function YellowComp(props){
    return(
        <div style={{color:"black", border:"4px solid white",backgroundColor:"yellow" , width:"300px"}}>
        <props.comp/>
        </div>
    )
}
//This function is taken as a props in HOC
function Counter(){
    const[count,setCount]=useState(0)
    return(
        <div className='container'>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Counter Increase</button>
        </div>
    )
}
export default HighOrderComp