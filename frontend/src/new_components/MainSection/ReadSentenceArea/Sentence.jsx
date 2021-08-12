import React from "react";
import "./Sentence.css";
class Sentence extends React.Component {
  render() {
    return <p className="Sentence">{this.props.text}</p>;
  }
}

export default Sentence;
