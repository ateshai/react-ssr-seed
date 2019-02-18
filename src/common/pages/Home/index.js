import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement, set } from "../../store/actions";
import Header from "../../components/Header";

class Home extends Component {

  onIncrement () {
    // console.log("increment method");
    this.props.increment()
  }

  onDecrement () {
    // console.log("decrement method");
    this.props.decrement()
  }

  render() {
    return(
      <div className="page home">
        <Header />
        <h1>Hellö Wörld!</h1>
        <p>Home, Lorem ipsum dolor sit amet.</p>
        <h2>{ this.props.counter }</h2>
        <button onClick={ () => this.onIncrement() }>+</button>
        <button onClick={ () => this.onDecrement() }>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
    counter: state.counter
});

const mapDispatchToProps = {
    increment,
    decrement,
    set
};

export const loadData = (store, params) => {
  const initial = Number(params.initial);
  if(!isNaN(initial)) {
    return store.dispatch(set(initial));
  }
}


export default {
  component: connect(mapStateToProps, mapDispatchToProps)(Home),
  loadData
};
