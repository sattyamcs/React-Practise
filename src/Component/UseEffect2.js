import { useState, useEffect } from "react";

// The useEffect hook allow you to perform side effects in your components , side effects like fetching data,manipulating DOM,and timers 

// For example like in timer the rerendring happens again and again , so for this we used useEffect to avoid this rerendering;
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  //useEffect using async function
  // useEffect(() => {
  //   async function fetchApi() {
  //     let response = await fetch(
  //       "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=55e9950b05cd47b49f5ee55a575b4d84&page=2"
  //     );
  //     let data = await response.json();
  //     console.log(data);
  //   }
  //   fetchApi();
  // });

  return <h1 className="container">I've rendered {count} times!</h1>;
}
export default Timer;