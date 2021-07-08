import React, {Component} from 'react';
/*
댓글들의 형식과 내용을 구현하는 컴포넌트 입니다.

props
1. Main:본문 내용을 받아옵니다.
2. Cmt: 주석 내용을 받아옵니다.
*/

class Cbox extends Component{
    constructor(props){
        super(props);
        this.state = {
            isCmtOn: false, // 주석, 본문 전환
            mainValue: this.props.Main, //본문 내용
            cmtValue: this.props.Cmt, // 주석 내용
        }
        this.btnCmtClick = this.btnCmtClick.bind(this);
    }

    btnCmtClick() {
        this.setState({
            isCmtOn: !this.state.isCmtOn
        });
    }

    render(){
        var TextValue = null;
        if (this.state.isCmtOn === false) {
            TextValue = this.state.mainValue;
        } else {
            TextValue = this.state.cmtValue;
        }

        return(
            <div>
                <textarea value={TextValue} readOnly></textarea>
                <button onClick={this.btnCmtClick}>현 상태:{this.state.isCmtOn ? '주석' : '본문'}</button>
            </div>
        );
    }
}


export default Cbox;