import React, { Component } from 'react';

export default class ReactStateClass extends Component {
constructor(){
    super();
    this.state=
    {data:1}
}

  render() {
    return <div className="container">
        <h1>Hello {this.state.data} </h1>
        <button onClick={()=>this.setState({data:this.state.data+1})}>ClickToUpdatedataInClass</button>
    </div>;
  }
}

