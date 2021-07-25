import React from "react";
import Sentence from "./Sentence";

class ReadSentenceArea extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((obj) => (
          <Sentence key={obj.id} text={obj.text} />
        ))}
      </div>
    );
  }
}

export default ReadSentenceArea;
