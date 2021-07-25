import React from "react";
class SearchNextButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.handleOnClick}>다음</button>;
  }
  handleOnClick = () => {
    this.props.onSearchNext();
  };
}

export default SearchNextButton;
