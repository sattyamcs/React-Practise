import React,{useState,useEffect} from 'react'

const UseEffect3 = () => {
    // 1.When we havent added any dependencis it will runs after every render and increment goes on and on
    // const [count, setCount] = useState(0);
    
    //   useEffect(() => {
    //     setTimeout(() => {
    //       setCount((count) => count + 1);
    //     }, 1000);
    //   });
    //   return <h1>I've rendered {count} times!</h1>;
    
    
    
    // 2.When we add empty dependency it will runs once after render. 
    // const [count, setCount] = useState(0);
    
    //   useEffect(() => {
    //     setTimeout(() => {
    //       setCount((count) => count + 1);
    //     }, 1000);
    //   }, []); // <- add empty brackets here
    
    //   return <h1>I've rendered {count} times!</h1>;
    
    
    
    // 3. When the state or props changed 
    const [count, setCount] = useState(0);
      const [calculation, setCalculation] = useState(0);
    
      useEffect(() => {
        setCalculation(() => count * 2);
      }, [count]); // <- add the count variable here, we can add more dependencies here
    
      return (
        <>
          <p>Count: {count}</p>
          <button onClick={() => setCount((c) => c + 1)}>+</button>
          <p>Calculation: {calculation}</p>
        </>
      );
    };


export default UseEffect3