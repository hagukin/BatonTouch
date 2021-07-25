import React from "react";
class SelectedSentence extends React.Component {
  render() {
    console.log("hello");
    return (
      <p>
        {this.props.data.text}
        <span>{this.props.data.recommend}</span>
      </p>
    );
  }
}
export default SelectedSentence;
