import React, { Component } from "react";
import { Link } from "react-router-dom";
class TOC extends Component {
  render() {
    return (
      <nav>
        <ul className="selectmode">
          <li>
            <Link to="/">메인 메뉴</Link>
          </li>
          <li>
            <Link to="/readNovel">소설 읽기</Link>
          </li>
          <li>
            <Link to="/writeNovel">소설 쓰기</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TOC;
