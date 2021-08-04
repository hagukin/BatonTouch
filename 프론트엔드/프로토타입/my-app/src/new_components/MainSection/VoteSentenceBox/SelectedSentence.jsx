import React from "react";
class SelectedSentence extends React.Component {
  render() {
    console.log("hello");
    return <p>{this.props.text}</p>;
  }
}
export default SelectedSentence;
