import React, { Component } from "react";
import "./App.css";
// component
import Novel from "./new_components/MainSection/Novel";
import { BrowserRouter } from "react-router-dom";
import Header from "./new_components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
  }

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
