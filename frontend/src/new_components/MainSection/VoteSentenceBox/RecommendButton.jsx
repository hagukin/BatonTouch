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
      this.upvote();
    } else if (this.props.downVote) {
      console.log("fuckU");
      this.downvote();
    }
    this.props.onVote();
  };

  async upvote() {
    try {
      const res = await fetch("upvote api", {
        method: "POST",
      });
      const data = await res.json();
      console.log("data");
      console.log(data);
    } catch (e) {
      console.log("에러");
      console.log(e);
    }
  }

  async downvote() {
    try {
      const res = await fetch("downvote api", {
        method: "POST",
      });
      const data = await res.json();
      console.log("data");
      console.log(data);
    } catch (e) {
      console.log("에러");
      console.log(e);
    }
  }
}

export default RecommendButton;
