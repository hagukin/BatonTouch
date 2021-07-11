import React, { Component } from "react";

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <section id="sect">{this.props.content}</section>;
  }
}

export default Section;
