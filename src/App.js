import React from "react";
// import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPassword: "",
      userCustomField: "",
      value: "grapefruit",
    };
  }

  componentDidMount() {
    this.setState({
      userName: "Gleb",
      userPassword: "lolkek",
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeSelect = (e) => {
    this.setState({ value: e.target.value });
  };

  componentDidUpdate() {
    console.table(this.state);
  }

  render() {
    return (
      <>
        <input
          name="userName"
          value={this.state.userName}
          onChange={this.handleChange}></input>
        <input name="userCustomField" onChange={this.handleChange}></input>
        <select value={this.state.value} onChange={this.handleChangeSelect}>
          <option value="grapefruit">Грейпфрут</option>
          <option value="lime">Лайм</option>
          <option value="coconut">Кокос</option>
          <option value="mango">Манго</option>
        </select>
        <input
          name="userPassword"
          value={this.state.userPassword}
          onChange={this.handleChange}></input>
      </>
    );
  }
}

export default App;
