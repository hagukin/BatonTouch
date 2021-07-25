import React from "react";
import Sentence from "./Sentence";
import './ReadSentenceArea.css';

class ReadSentenceArea extends React.Component {
  render() {
    return (
      <div className="ReadSentenceArea">
        {this.props.data.map((obj) => (
          <Sentence key={obj.id} text={obj.text} />
        ))}
      </div>
    );
  }
}

export default ReadSentenceArea;
