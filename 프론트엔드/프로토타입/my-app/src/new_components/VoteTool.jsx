import React from "react";
import RecommendButton from "./RecommendButton";
import SearchNextButton from "./SearchNextButton";
import SearchPrevButton from "./SearchPrevButton";
class VoteTool extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RecommendButton onRecommend={this.handleOnRecommend} />
        <SearchPrevButton onSearchPrev={this.handleOnSearchPrev} />
        <SearchNextButton onSearchNext={this.handleOnSearchNext} />
      </div>
    );
  }

  handleOnRecommend = () => {
    this.props.onVoteSentence();
  };

  handleOnSearchNext = () => {
    this.props.onSearchSentence("next");
  };

  handleOnSearchPrev = () => {
    this.props.onSearchSentence("prev");
  };
}

export default VoteTool;
