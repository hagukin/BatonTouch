import React from "react";
class RecommendButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.handleOnClick}>👍{this.props.recommend}</button>;
  }

  handleOnClick = () => {
    this.props.onRecommend();
  };
}

export default RecommendButton;
