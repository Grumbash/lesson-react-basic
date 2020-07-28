import React from "react";
import Site from "./Site";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: "Gleb",
      age: 23,
    };
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Site number={this.state.counter}></Site>
        <button onClick={this.handleClick}>counter</button>
      </>
    );
  }
}

// function App(props) {
//   return (
//     <>
//       <Site name="Google"></Site>
//       <Site name="Yandex"></Site>
//       <Site name="VK"></Site>
//     </>
//   );
// }

export default App;
