import React,{useState,useEffect} from 'react';

const UseEffect = () => {
//This is setState
    const [count, setCount] = useState(0);
  return (
  <>
  <div className='container' >
<h1 className='heading'>Counter {count}</h1>
<button onClick={()=>setCount(count+1) }>Increase Counter</button>
<button onClick={()=>setCount(count-1)}>Decrease Counter</button>


  </div>;
  </>
  );
};

export default UseEffect;
