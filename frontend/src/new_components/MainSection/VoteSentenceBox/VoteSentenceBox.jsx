import React from "react";
import SelectedSentence from "./SelectedSentence";
import VoteTool from "./VoteTool";
import "./VoteSentenceBox.css";
class VoteSentenceBox extends React.Component {
  // TODO: 추천변화 서버 PATCH후 FORCEUPDATE

  render() {
    // const selectedData = this.props.data.find((elem) => elem.id === this.state.selectedId);

    // return (
    //   <div className="VoteSentenceBox">
    //     <SelectedSentence text={selectedData.text} />
    //     <VoteTool recommend={selectedData.recommend} onVoteSentence={this.handleVoteSentence} onSearchSentence={this.handleSearchSentence} />
    //   </div>
    // );
    return (
      <div className="VoteSentenceBox">
        <span className="voteUserName">{this.props.selectedData.writer}</span>
        <span className="voteDate">{this.props.selectedData.date.slice(0, 10)}</span>
        <SelectedSentence text={this.props.selectedData.content} />
        <VoteTool down={this.props.selectedData.downvote} up={this.props.selectedData.upvote} onVote={this.onVote} />
      </div>
    );
  }

  onVote = () => {
    this.props.onVote();
  };
}
export default VoteSentenceBox;
