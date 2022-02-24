import React,{useState,useMemo} from 'react'
//used for increasing or enhnacing application performance, by controlling the unwanted re- rendering of the any function.


const ReactUseMemo = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10)
    // function multicountMemo(){
    //     return count+20;
    // }
    //This function creates re rendering whenever Update count is Clicked, So for stopping this re rendering we need to use UseMemo hook.

    const usingUseMemo=useMemo(() =>{
            return count+20;
}, [count])// This will Prevent calling of unwanted function
  return (
    <div className='container'>
        <h1>Counter:{count}</h1>
        <h1>Item:{item}</h1>
        <h1>{usingUseMemo}</h1>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        <button onClick={()=>setItem(item*10)}>Update Item</button>
    </div>
  )
}

export default ReactUseMemo