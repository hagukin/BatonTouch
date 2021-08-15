import React from "react";
import SelectedSentence from "./SelectedSentence";
import VoteTool from "./VoteTool";
import "./VoteSentenceBox.css";
class VoteSentenceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: false,
    };
  }

  render() {
    return (
      <div className="VoteSentenceBox">
        <span className="voteUserName">{this.props.selectedData.writer}</span>
        <span className="voteDate">{this.props.selectedData.date.slice(0, 10)}</span>
        <SelectedSentence text={this.state.comment ? this.props.selectedData.comment : this.props.selectedData.content} />
        <button className="voteToggleCmt" onClick={this.onMouseClick}>{this.state.comment ? "주석" : "문장"}</button>
        <VoteTool down={this.props.selectedData.downvote} up={this.props.selectedData.upvote} onVote={this.onVote} />
      </div>
    );
  }

  onMouseClick = () => {
    this.setState((prev) => ({
      comment: !prev.comment,
    }));
  };

  onMouseOut = () => {
    this.setState({
      comment: false,
    });
  };

  onVote = () => {
    this.props.onVote();
  };
}
export default VoteSentenceBox;
