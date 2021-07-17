import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
// component
// import * as CP from "./components";
import TOC from "./components/header/TOC";
import Footer from "./components/readNovel/Footer";
import ShowNovel from "./components/showNovel/showNovel";
import Novel from "./components/Novel/Novel";
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
      <div className="App grid_container">
        <Route path="/">
          <header>
            <div className="topwrapper">
              <span id="loginNav">login / sign in</span> 
            </div>
            <h1 id="HomepageTitle">BatonTouch</h1>
            <TOC></TOC>
          </header>
        </Route>
        <Route path="/readNovel">
          <ShowNovel></ShowNovel>
        </Route>
        <Route path="/writeNovel">
          <Novel></Novel>
        </Route>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
