import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="Nav">
        <ul>
          <li>
            <Link to="/main">메인</Link>
          </li>
          <li>
            <Link to="/read">읽기</Link>
          </li>
          <li>
            <Link to="/contribute">참여</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
