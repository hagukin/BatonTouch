import React, { Component } from "react";

class SentenceBox extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     _content: "" + this.props.content, // 문장 내용
  //   };
  // }

  render() {
    return <textarea readOnly cols={140} rows={1} value={this.props.content} onMouseOver></textarea>;
  }
}

export default SentenceBox;
