import React, {Component} from 'react';
/*
댓글들의 형식과 내용을 구현하는 컴포넌트 입니다.

props
1. Main:본문 내용을 받아옵니다.
2. Cmt: 주석 내용을 받아옵니다.
3. Recomm:추천수를 받아옵니다.

4. onRecommClick: 추천수 버튼을 누른경우 상위 컴포넌트에 신호를 보냅니다.
-> 상위 컴포넌트의 값을 변화시키지 않고 상위 컴포넌트의 상위 컴포넌트(= 2단계 위)에게 신호를 보내는 용도로만 존재합니다.

5. id: key와 같은 id값을 가져옵니다.
-> 어느 Cbox에서 recomm의 변화가 일어났는지를 상위 컴포넌트들에 알리기 위해서 존재합니다.

6.rows, cols: textarea의 rows,cols 프로퍼티
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
                <textarea value={TextValue} readOnly rows={this.props.rows} cols={this.props.cols}></textarea>
                <button onClick={function(event){
                    this.props.onRecommClick(this.props.id);
                }.bind(this)}>{this.props.Recomm}</button>
                <button onClick={this.btnCmtClick}>현 상태:{this.state.isCmtOn ? '주석' : '본문'}</button>
            </div>
        );
    }
}


export default Cbox;