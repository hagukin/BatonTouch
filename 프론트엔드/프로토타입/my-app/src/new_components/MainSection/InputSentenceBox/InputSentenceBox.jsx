import React from "react";
import InputSentence from "./InputSentence";
import InputTool from "./InputTool";
import './InputSentenceBox.css'
class InputSentenceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <div className="InputSentenceBox">
        <InputSentence text={this.state.text} onChangeSentence={this.handleChangeSentence} />
        <InputTool onClickButton={this.handleOnClickButton} />
      </div>
    );
  }

  handleOnClickButton = () => {
    this.props.onAddSub(this.state.text); // 상위 컴포넌트로 text전달
    this.setState({ text: "" });
  };

  handleChangeSentence = (_text) => {
    // InputSentence의 onChange가 호출
    // this.state.text 변경
    this.setState({ text: _text });
  };
}

export default InputSentenceBox;
