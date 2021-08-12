import React from "react";
class SearchPrevButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button className="prevBtn" onClick={this.handleOnClick}>이전</button>;
  }

  handleOnClick = () => {
    this.props.onSearchPrev();
  };
}

export default SearchPrevButton;
