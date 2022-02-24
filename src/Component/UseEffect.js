import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  //This is useEffect
  // The useEffect hook allow you to perform side effects in your components , side effects like fetching data,manipulating DOM,and timers 
  
  // By using this hook you are telling your react component to do something after render.React will remember the function you passes and call it later after performing render
  // It will be called whenever component is created , updated, unmounted, whenever the state is updated. For all this calling we put it into conditions
  const [count, setCount] = useState(10);
  const [data, setData] = useState(100);


  //Here this works when the count state updated as we gave conditions
  // we will here give the conditons where it works
  useEffect(() => {
    console.warn("Here alert works when the component updated")
  }, [count]);

  return (
    <>
      <div className='container' >
        <h1 className='heading'>SetCount : {count}</h1>
        <h1 className='heading'>SetData : {data}</h1>
        <button onClick={() => setCount(count + 1)}>Increase Counter</button>
        <button onClick={() => setData(data + 1)}>Increase Data</button>
      </div>;
    </>
  );
};

export default UseEffect;
