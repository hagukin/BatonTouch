import React from "react";
class InputSentence extends React.Component {
  render() {
    return <input value={this.props.text} onChange={this.handleOnChange} />;
  }

  handleOnChange = (e) => {
    this.props.onChangeSentence(e.target.value); // 상위 컴포넌트로 <input>의  value 전달
  };
}

export default InputSentence;
