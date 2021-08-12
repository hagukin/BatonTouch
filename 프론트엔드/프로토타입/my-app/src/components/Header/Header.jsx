import React from "react";
import TOC from "./TOC";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="topwrapper">
          <span id="loginNav">login / sign in</span>
        </div>
        <h1 id="HomepageTitle">BatonTouch</h1>
        <TOC></TOC>
      </header>
    );
  }
}
export default Header;
