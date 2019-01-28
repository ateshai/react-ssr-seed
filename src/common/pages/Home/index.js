import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from "../../actions";

class Home extends Component {

  render() {
    return(
      <div className="page">
        <h1>Hellö Wörld!</h1>
        <p>Home, Lorem ipsum dolor sit amet.</p>
        <h2>{ this.props.counter }</h2>
        <button onClick={ () => this.props.increment() }>+</button>
        <button onClick={ () => this.props.decrement() }>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
    counter: state.counter
});

export default connect(mapStateToProps, { increment, decrement })(Home);
