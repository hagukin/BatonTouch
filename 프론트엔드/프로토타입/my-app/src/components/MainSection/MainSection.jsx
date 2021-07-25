import React from "react";
import Show from "./Novel/showNovel";
import Vote from "../voteNovel/voteNovel";
class MainSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.mode == "read" && <Show />}
        {this.props.mode == "vote" && <Vote />}
      </div>
    );
  }
}
export default MainSection;
