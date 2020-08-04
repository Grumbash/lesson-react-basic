import React, { Component } from 'react'
import Button from "./components/Button"
import Counter from "./components/Counter"
import Page from "./components/Page";

export default class App extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
   
    return (
      <div>
        <Counter count={this.state.count}></Counter>
        <Button handleClick={this.handleClick}></Button>
        
      </div>
    )
  }
}
