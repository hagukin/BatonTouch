import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "main",
    };
  }
  render() {
    return (
      <nav className="navWrapper">
        <ul className="navigation">
          <li>
            <Link to="/" className="menus" onClick={this.handleOnClick}>
              메인
            </Link>
          </li>
          <li>
            <Link to="/read" className="menus active" onClick={this.handleOnClick}>
              읽기
            </Link>
          </li>
          <li>
            <Link to="/contribute" className="menus" onClick={this.handleOnClick}>
              참여
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  handleOnClick = (e) => {
    let dest = document.getElementsByClassName("active");
    dest[0].className = dest[0].className.replace(" active", "");
    e.target.className = e.target.className + " active";
  };
}

export default Nav;
