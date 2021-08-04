import React from "react";
import SelectedSentence from "./SelectedSentence";
import VoteTool from "./VoteTool";
import "./VoteSentenceBox.css";
class VoteSentenceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: "sub_0",
    };
  }
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
        <SelectedSentence text={this.props.selectedData.content} />
        <VoteTool recommend={this.props.selectedData.upvote} onVoteSentence={this.handleVoteSentence} onSearchSentence={this.handleSearchSentence} />
      </div>
    );
  }

  handleSearchSentence = (direction) => {
    if (direction === "next") {
      if (this.state.selectedId.slice(4) !== String(this.props.data.length - 1)) {
        this.setState((prevState) => ({
          selectedId: "sub_" + (parseInt(prevState.selectedId.slice(4)) + 1),
        }));
      }
    } else if (direction === "prev") {
      if (this.state.selectedId.slice(4) !== "0") {
        this.setState((prevState) => ({
          selectedId: "sub_" + (parseInt(prevState.selectedId.slice(4)) - 1),
        }));
      }
    }
  };

  handleVoteSentence = () => {
    this.props.onAddRecommend(this.state.selectedId);
  };
}
export default VoteSentenceBox;
