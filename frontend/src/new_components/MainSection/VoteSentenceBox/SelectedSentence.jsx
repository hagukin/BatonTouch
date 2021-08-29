import React from "react";
class SelectedSentence extends React.Component {
  render() {
    return <p className="voteContent">{this.props.text}</p>;
  }

  handleOnMouseOver = () => {};
}
export default SelectedSentence;
