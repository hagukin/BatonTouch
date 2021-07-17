import React, { Component } from "react";
/*
댓글들의 형식과 내용을 구현하는 컴포넌트 입니다.

props
1. Main:본문 내용을 받아옵니다.
2. Cmt: 주석 내용을 받아옵니다.
3. Recomm:추천수를 받아옵니다.
4. cols: textarea의 가로 줄 수
5. rows: textarea의 세로 줄 수
*/

class Cbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCmtOn: false, // 주석, 본문 전환
      mainValue: this.props.Main, //본문 내용
      cmtValue: this.props.Cmt, // 주석 내용
    };
    this.btnCmtClick = this.btnCmtClick.bind(this);
  }

  btnCmtClick() {
    this.setState({
      isCmtOn: !this.state.isCmtOn,
    });
  }

  render() {
    var TextValue = null;
    if (this.state.isCmtOn === false) {
      TextValue = this.state.mainValue;
    } else {
      TextValue = this.state.cmtValue;
    }
    return (
      <div className="comment_wrapper">
        <textarea value={TextValue} readOnly cols={this.props.cols} rows={this.props.rows}></textarea>
        <button>{this.props.Recomm}</button>
        <button onClick={this.btnCmtClick}>현 상태:{this.state.isCmtOn ? "주석" : "본문"}</button>
      </div>
    );
  }
}

export default Cbox;
