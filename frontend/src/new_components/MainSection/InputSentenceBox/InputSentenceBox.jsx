import React from "react";
import InputSentence from "./InputSentence";
import InputTool from "./InputTool";
import "./InputSentenceBox.css";
class InputSentenceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "text",
      text: "",
      comment: "",
    };
  }

  render() {
    return (
      <div className="InputSentenceBox">
        <InputSentence text={this.state.mode === "text" ? this.state.text : this.state.comment} onChangeSentence={this.handleChangeSentence} />
        <button className="toggleCmt" onClick={this.handleOnClickModeButton}>{this.state.mode === "text" ? "문장" : "주석"}</button>
        <InputTool onClickButton={this.handleOnClickButton} />
        <span className="wordLimit">
          {this.state.text.length}/{this.state.mode === "text" ? 130 : 50}
        </span>
      </div>
    );
  }

  handleOnClickModeButton = (e) => {
    if (this.state.mode === "text") {
      this.setState({
        mode: "comment",
      });
    } else if (this.state.mode === "comment") {
      this.setState({
        mode: "text",
      });
    }
  };

  handleOnClickButton = () => {
    if (this.state.text.length > 130) {
      alert("문장이 130자 초과입니다.");
    } else if (this.state.comment.length > 50) {
      alert("주석이 50자 초과입니다.");
    } else {
      if (document.cookie.match("(^|;) ?" + "isupload" + "=([^;]*)(;|$)")) {
        alert("이미 업로드 하셨습니다.");
      } else {
        if (window.confirm('"' + this.state.text + '"' + "정말로 이 문장을 업로드 하겠습니까?\n한번 올린 문장은 수정 불가능 합니다.")) {
          const date = new Date();
          // 현재 쿠키수명 1분
          date.setMinutes(date.getMinutes() + 1);
          document.cookie = "isupload=true; path=/; expires=" + date.toUTCString() + ";";
          // // 백엔드 서버로 데이터 전송
          this.postNewSentence();
          // this.props.onAddSub(this.state.text); // 상위 컴포넌트로 text전달
          this.setState({ text: "", comment: "" });

          this.props.onPost();
        }
      }
    }
  };

  async postNewSentence() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          writer: "anony",
          title: "mysql2",
          content: this.state.text,
          comment: this.state.comment,
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
    if (this.state.mode === "text") {
      this.setState({ text: _text });
    } else if (this.state.mode === "comment") {
      this.setState({ comment: _text });
    }
  };
}

export default InputSentenceBox;
