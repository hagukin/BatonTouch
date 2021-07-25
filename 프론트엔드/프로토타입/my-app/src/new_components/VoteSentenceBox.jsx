import React from "react";
import SelectedSentence from "./SelectedSentence";
import VoteTool from "./VoteTool";
class VoteSentenceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: "sub_0",
    };
  }
  render() {
    const selectedData = this.props.data.find((elem) => elem.id === this.state.selectedId);

    return (
      <div>
        <SelectedSentence data={selectedData} />
        <VoteTool onVoteSentence={this.handleVoteSentence} onSearchSentence={this.handleSearchSentence} />
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
      if (this.state.selectedId.slice(4) !== '0') {
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
