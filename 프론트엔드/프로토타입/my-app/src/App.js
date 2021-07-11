import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
// component
// import * as CP from "./components";
import Nav from "./components/header/Nav";
import TOC from "./components/header/TOC"
import Section from "./components/readNovel/Section";
import Footer from "./components/readNovel/Footer";
import WriteNovel from "./components/writeNovel/writeNovel";
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
        <Route path="/">
          <TOC></TOC>
        </Route>
        <Route path="/readNovel">
          <Section content={comment_list}></Section>
        </Route>
        <Route path="/writeNovel">
          <WriteNovel></WriteNovel>
        </Route>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
