import React, { Component } from "react";
import "./App.css";
// component
import Novel from "./new_components/Novel";
import { BrowserRouter } from "react-router-dom";
import Nav from "./new_components/Nav";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Novel />
      </div>
    );
  }
}

export default App;
