import React from "react";
import Nav from "./Nav";
import "./Header.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        {/* <h1>BattonTouch</h1> */}
        <Nav />
      </header>
    );
  }
}
export default Header;
