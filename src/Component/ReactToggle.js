import React,{useState} from 'react';

const ReactToggle = () => {
  
      const [data, setData] = useState("Sattyam");
  return (
    <>
      <div className="container">
       { data? <h1>Hello Sattyam</h1>:<h1>Hello Shivam</h1>}
        <button onClick={()=>setData(!data)}>Click here to toggle</button>
      </div>
    </>
  );
};

export default ReactToggle;
