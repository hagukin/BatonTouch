import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav id="header">
        <div className="selectmode">독서</div>
        <div className="selectmode">참여하기</div>
        <div id="about">About</div>
      </nav>
    );
  }
}

export default Nav;
