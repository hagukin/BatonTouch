import React, { Component } from "react";
/*
사용자 입력 cbox를 구현하는 컴포넌트 입니다.
props
1. onSubmit 핸들러: 사용자가 입력한 본문과 주석을 상위 컴포넌트에 반환합니다.
-> 유저가 입력한 본문과 주석을 저장하는 상위 컴포넌트의 배열을 수정합니다.
2. btnMode: 상위 컴포넌트의 uCboxMode가 write면 '확인'/ devise면 '수정'입니다.
3. cols: textarea의 cols
4. rows: textarea의 rows
5. mainData : 본문
6. cmtData : 주석
*/
class UCbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainValue: this.props.mainData,
      CmtValue: this.props.cmtData,
      isCmtOn: false,
    };
    this.btnCmtClick = this.btnCmtClick.bind(this);
    this.handleChangeMain = this.handleChangeMain.bind(this);
    this.handleChangeCmt = this.handleChangeCmt.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  btnCmtClick() {
    this.setState({
      isCmtOn: !this.state.isCmtOn,
    });
  }

  handleChangeMain(event) {
    this.setState({ MainValue: event.target.value });
  }
  handleChangeCmt(event) {
    this.setState({ CmtValue: event.target.value });
  }
  handleSubmit(event) {
    this.props.onSubmit(this.state.MainValue, this.state.CmtValue);
  }

  render() {
    var cboxMain = <textarea name="cboxMain" value={this.state.MainValue} onChange={this.handleChangeMain} cols={this.props.cols} rows={this.props.rows}></textarea>;
    var cboxCmt = <textarea name="cboxCmt" value={this.state.CmtValue} onChange={this.handleChangeCmt} cols={this.props.cols} rows={this.props.rows}></textarea>;

    var cboxText = null;
    if (this.state.isCmtOn === false) {
      cboxText = cboxMain;
    } else {
      cboxText = cboxCmt;
    }

    return (
      <div>
        {cboxText}
        <button onClick={this.handleSubmit}>{this.props.btnMode}</button>
        <button onClick={this.btnCmtClick}>현 상태:{this.state.isCmtOn ? "주석" : "본문"}</button>
      </div>
    );
  }
}

export default UCbox;
