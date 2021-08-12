import React from "react";
class InputTool extends React.Component {
  // 업데이트 불필요한 컴포넌트
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <button className="InputTool" onClick={this.handleOnClick}>등록</button>;
  }

  handleOnClick = () => {
    this.props.onClickButton();
  };
}

export default InputTool;
