import React from 'react'
//In react you will render lists with some loop. And here we are using map method for iterating elements of an array
const KeyAndList = () => {
    const lists = ['ram','shyam','ghanShyam']
    // const lists = [1,2,3,6,5,4,]
    const listitems=lists.map((name,index)=> <li key={index}>{name}</li>)
    //Key are the unque identifiers.
  return (
    <div>
        <h1>List Items</h1>
        <li>{listitems}</li>
    </div>
  )
}

export default KeyAndList;