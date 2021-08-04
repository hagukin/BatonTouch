import React from "react";
import VoteSentenceBox from "../VoteSentenceBox/VoteSentenceBox";
class VoteSentenceArea extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const VoteSentenceAreaList = this.props.data.map((x) => <VoteSentenceBox key={x.id} selectedData={x} />);
    return <div>{VoteSentenceAreaList}</div>;
  }
}
export default VoteSentenceArea;
