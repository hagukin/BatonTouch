import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class TOC extends Component{
    render(){
        return(
            <div>
                <ul>
                    <Link to="/"><li>메인 메뉴</li></Link>
                    <Link to="/readNovel"><li>소설 읽기</li></Link>
                    <Link to="/writeNovel"><li>소설 쓰기</li></Link>
                </ul>
            </div>
        );
    }
}

export default TOC;