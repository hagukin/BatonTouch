import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
// component
import Header from "./components/Header/Header.jsx";
import MainSection from "./components/MainSection/MainSection.jsx";
import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: "read",
    };
  }
  render() {
    return (
      <div className="App grid_container">
        <Header />
        <MainSection mode={this.state.main} />
        <Footer />
      </div>
    );
  }
}

export default App;
