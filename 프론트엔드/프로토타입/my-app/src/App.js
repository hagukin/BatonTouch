import React, { Component } from "react";
import "./App.css";
// component
// import * as CP from "./components";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Footer from "./components/Footer";
// json
import _commentsJson from "./data/comments.json";
// function
import * as Myfunc from "./functions/Myfunc.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsJson: _commentsJson,
    };
  }
  render() {
    var comment_list = Myfunc.loadcommentsJsonToList(this.state.commentsJson);
    return (
      <div className="grid_container">
        <Nav></Nav>
        <Section content={comment_list}></Section>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
