import React from "react";
class RecommendButton extends React.Component {
  render() {
    if (this.props.upVote) {
      return (
        <button className="recommBtn" onClick={this.handleOnClick}>
          👍{this.props.recommend}
        </button>
      );
    } else if (this.props.downVote) {
      return (
        <button className="recommBtn" onClick={this.handleOnClick}>
          👎{this.props.recommend}
        </button>
      );
    }
  }

  handleOnClick = () => {
    if (this.props.upVote) {
      console.log("따봉!");
      // PATCH upvote
    } else if (this.props.downVote) {
      console.log("fuckU");
      // PATCH downvote
    }
    this.props.onVote();
  };
}

export default RecommendButton;
