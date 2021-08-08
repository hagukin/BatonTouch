import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navWrapper">
        <ul className="navigation">
          <li>
            <Link to="/main" className="menus" className="active">메인</Link>
          </li>
          <li>
            <Link to="/read" className="menus">읽기</Link>
          </li>
          <li>
            <Link to="/contribute" className="menus">참여</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
