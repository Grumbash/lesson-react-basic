import React from "react";

function App() {
  const style = { color: "blue" };

  return (
    <h1 style={style}>
      <p className="title">
        <a href="https://google.com">google</a>
      </p>
      <a href="https://yandex.by">yandex</a>
    </h1>
  );
}

export default App;
