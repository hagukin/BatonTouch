import React from "react";
class RecommendButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.upVote) {
      return <button onClick={this.handleOnClick}>👍{this.props.recommend}</button>;
    } else if (this.props.downVote) {
      return <button onClick={this.handleOnClick}>👎{this.props.recommend}</button>;
    }
  }

  handleOnClick = () => {
    this.props.onRecommend();
  };
}

export default RecommendButton;
