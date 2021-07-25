import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <ul>
                    <li><Link to='/'>메인</Link></li>
                    <li><Link to='/write'>쓰기</Link></li>
                    <li><Link to='/vote'>투표</Link></li>
                </ul>
            </div>
        );
    }
}

export default Nav;