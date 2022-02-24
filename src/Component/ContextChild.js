import React,{useContext} from 'react'
import {GlobalInfo} from './ContextAPI'

const ContextChild = () => {
    const{appColor}=useContext(GlobalInfo)
    console.warn(appColor)//Here we got the data that transfered form the parent 
  return (
    <div>
        <h1 style={{color:appColor}}>I am child component</h1>
    </div>
  )
}

export default ContextChild