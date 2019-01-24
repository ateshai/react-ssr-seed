import React, { Component } from "react";

class Home extends Component {

  exampleMethod() {
    console.log("something");
  }

  render() {
    return(
      <div className="page">
        <h1>Hellö Wörld!</h1>
        <p>Home, Lorem ipsum dolor sit amet.</p>
        <button onClick={ () => this.exampleMethod() }>Console log something</button>
      </div>
    )
  }
}

export default Home;
