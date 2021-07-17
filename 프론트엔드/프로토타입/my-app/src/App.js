import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
// component
// import * as CP from "./components";
import TOC from "./components/header/TOC"
import Footer from "./components/readNovel/Footer";
import WriteNovel from "./components/writeNovel/writeNovel";
import ShowNovel from "./components/showNovel/showNovel";
// json
import _commentsJson from "./data/comments.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsJson: _commentsJson,
    };
  }
  render() {
    return (
      <div className="grid_container">
        <Route path="/">
          <TOC></TOC>
        </Route>
        <Route path="/readNovel">
          <ShowNovel></ShowNovel>
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
