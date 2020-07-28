import React from "react";
import Site from "./Site";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  render() {
    return (
      <>
        <Site name={this.props.text}></Site>
        <Site name="Yandex"></Site>
        <p onClick={this.handleClick}>counter: {this.state.counter}</p>
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
