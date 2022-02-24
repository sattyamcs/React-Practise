import React,{createContext, useState} from 'react'
import ContextChild from './ContextChild';
//ContextAPI is used to manage states globally same works like Redux
// Use to transfer data from 1 parent to many childs
// This we will make as a parent component 
//In parent we import createContext and in child we import useContext
export const GlobalInfo=createContext();
const ContextAPI = () => {
    const[color,setColor]=useState("red")
  return (
    <GlobalInfo.Provider value={{appColor:color}}>
    <div>
        <h1>Hello i am parent component</h1>
        <ContextChild/>
    </div>

   </GlobalInfo.Provider>
  )
}

export default ContextAPI