import React from 'react';

const ReactProps = (props) => {
  return (
      <>
      <div className="container">
      <h1 className='heading'>React Props</h1>
      <h1>Hi,{props.name.name}</h1>
      <h1>Having Profession {props.name.Profession}</h1>
      <button onClick={()=>props.Data}>Call Data Function</button>
      </div>
      </>
  );
};

export default ReactProps;
