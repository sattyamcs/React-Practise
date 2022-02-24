import { useState, useEffect } from "react";

// The useEffect hook allow you to perform side effects in your components , side effects like fetching data,manipulating DOM,and timers 

// For example like in timer the rerendring happens again and again , so for this we used useeffect to avoid this rerendering;
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1 className="container">I've rendered {count} times!</h1>;
}
export default Timer;