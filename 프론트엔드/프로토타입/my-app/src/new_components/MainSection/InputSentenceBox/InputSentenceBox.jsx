import React from "react";
import InputSentence from "./InputSentence";
import InputTool from "./InputTool";
import "./InputSentenceBox.css";
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
        <span className="wordLimit">{this.state.text.length}/130</span>
      </div>
    );
  }

  handleOnClickButton = () => {
    if (this.state.text.length > 130) {
      alert("130자 초과입니다.");
    } else {
      if (window.confirm('"' + this.state.text + '"' + "정말로 이 문장을 업로드 하겠습니까?\n한번 올린 문장은 수정 불가능 합니다.")) {
        document.cookie = "isupload=true";
        this.props.onAddSub(this.state.text); // 상위 컴포넌트로 text전달
        this.setState({ text: "" });
      }
      // // 백엔드 서버로 데이터 전송
      // this.postSentence();
    }
  };

  async postSentence() {
    const res = await fetch("api주소", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 2, // TODO
        writer: "",
        title: "mysql2",
        content: "2",
        comment: "",
        date: "2021-08-01T11:30:57.618483Z", // TODO
        upvote: 0,
        downvote: 0,
        position: 0,
        end_story: false,
      }),
    });
    const data = await res.json();
    return data;
  }

  handleChangeSentence = (_text) => {
    // InputSentence의 onChange가 호출
    // this.state.text 변경
    this.setState({ text: _text });
  };
}

export default InputSentenceBox;
