import React from "react";
import RecommendButton from "./RecommendButton";
class VoteTool extends React.Component {
  render() {
    return (
      <div className="VoteTool">
        <RecommendButton upVote recommend={this.props.up} onVote={this.onVote} />
        <RecommendButton downVote recommend={this.props.down} onVote={this.onVote} />
        {/* <SearchPrevButton onSearchPrev={this.handleOnSearchPrev} />
        <SearchNextButton onSearchNext={this.handleOnSearchNext} /> */}
      </div>
    );
  }

  onVote = () => {
    this.props.onVote();
  };
}

export default VoteTool;
