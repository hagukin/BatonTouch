import React from "react";
class SearchButton extends React.Component {
  render() {
    return (
      <button className={this.props.next ? "nextBtn" : "prevBtn"} onClick={this.handleOnClick}>
        {this.props.next ? "다음" : "이전"}
      </button>
    );
  }
  handleOnClick = () => {
    if (this.props.next) {
      if (this.props.length - (this.props.page + 1) * 5 <= 0) return;
      this.props.onClick("next");
    } else if (this.props.prev) {
      if (this.props.page === 0) return;
      this.props.onClick("prev");
    }
  };
}

export default SearchButton;
