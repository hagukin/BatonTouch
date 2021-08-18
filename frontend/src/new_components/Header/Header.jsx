import React from "react";
import Nav from "./Nav";
import "./Header.css";
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="accountInfo">
          <div className="login">
            <a className="loginText" href="#">로그인/회원가입</a>
            <div className="loginPage">
              <span>ID : </span><input></input>
              <span>PW : </span><input></input>
            </div>
          </div>
        </div>
        <hgroup className="titleWrapper">
          <h1 className="titleName">Baton Touch</h1>
          <h2 className="subtitleName">릴레이 소설 웹사이트</h2>
        </hgroup>
        <Nav />
      </header>
    );
  }
}
export default Header;
