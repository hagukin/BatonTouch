import React, { Component } from "react";

// 추천수 버튼
class RecommendButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _fixed: this.props.fixed, // true: 추천수 고정(변화 불가)
      _value: this.props.value, // 추천수
    };
  }

  render() {
    return (
      <input
        type="button"
        value={this.state._value}
        onClick={function (e) {
          e.preventDefault();
          if (!this.state._fixed) {
            this.setState({ _value: this.state._value + 1 });
          } else {
            alert("이미 등록된 문장입니다.");
          }
        }.bind(this)}
      ></input>
    );
  }
}
export default RecommendButton;
