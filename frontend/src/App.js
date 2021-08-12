import React, { Component } from "react";
import "./App.css";
// component
import Novel from "./new_components/MainSection/Novel";
import Header from "./new_components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Novel />
      </div>
    );
  }
}

export default App;
