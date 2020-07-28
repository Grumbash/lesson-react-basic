import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement("h1", null, "Hello TMS!");
// const element = <h1>Hello world!</h1>;

ReactDOM.render(element, document.getElementById("root"));
