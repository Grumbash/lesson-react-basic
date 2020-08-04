import React, { Component } from 'react';

import Plus from "./components/Counter/Plus"
import Minus from "./components/Counter/Minus"
import Count from "./components/Counter/Count"

export default class App extends Component {

  state ={
    count: 0
  }

  handleDec = () => {
    this.setState({count: this.state.count - 1});
  }

  handleInc = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
        <div>
          <Minus handleClick={this.handleDec} count={this.state.count}></Minus>
          <Count count={this.state.count}></Count>
          <Plus handleClick={this.handleInc} count={this.state.count}></Plus>
        </div>
    
    )
  }
}
