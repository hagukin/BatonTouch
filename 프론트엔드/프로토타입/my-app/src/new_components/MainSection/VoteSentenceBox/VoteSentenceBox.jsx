import React from "react";
import SelectedSentence from "./SelectedSentence";
import VoteTool from "./VoteTool";
import "./VoteSentenceBox.css";
class VoteSentenceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedId: "sub_0",
    };
  }

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
        <span>{this.props.selectedData.writer}</span>
        <span>{this.props.selectedData.date.slice(0, 10)}</span>
        <SelectedSentence text={this.props.selectedData.content} />
        <VoteTool down={this.props.selectedData.downvote} up={this.props.selectedData.upvote} onVoteSentence={this.handleVoteSentence} onSearchSentence={this.handleSearchSentence} />
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
    // if (cookie){
    //   alert
    // } else{
    //   onAddVote
    //   setcookie
    // }
    this.props.onAddRecommend(this.state.selectedId);
  };

  setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  }
}
export default VoteSentenceBox;
