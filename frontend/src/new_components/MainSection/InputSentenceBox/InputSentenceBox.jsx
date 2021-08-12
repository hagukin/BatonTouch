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
    console.log(this.postNewSentence());

    // if (this.state.text.length > 130) {
    //   alert("130자 초과입니다.");
    // } else {
    //   if (document.cookie.match("(^|;) ?" + "isupload" + "=([^;]*)(;|$)")) {
    //     alert("이미 업로드 하셨습니다.");
    //   } else {
    //     if (window.confirm('"' + this.state.text + '"' + "정말로 이 문장을 업로드 하겠습니까?\n한번 올린 문장은 수정 불가능 합니다.")) {
    //       const date = new Date();
    //       date.setMinutes(date.getMinutes() + 1);
    //       document.cookie = "isupload=true; path=/; expires=" + date.toUTCString() + ";";
    //       // // 백엔드 서버로 데이터 전송
    //       this.postNewSentence();
    //       this.props.onAddSub(this.state.text); // 상위 컴포넌트로 text전달
    //       this.setState({ text: "" });
    //     }
    //   }
    // }
  };

  async postNewSentence() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 2, // TODO: id처리는 백엔드에서?
          writer: "anony",
          title: "mysql2",
          content: this.state.text,
          comment: "helloworld",
          date: new Date().toISOString(), // TODO
          upvote: 0,
          downvote: 0,
          position: 0,
          end_story: false,
        }),
      });
      const data = await res.json();
      console.log("리스폰스");
      console.log(data);
    } catch (e) {
      console.log("에러남");
      console.log(e);
    }
  }

  handleChangeSentence = (_text) => {
    this.setState({ text: _text });
  };
}

export default InputSentenceBox;
