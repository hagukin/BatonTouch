import React from "react";
import Sentence from "./Sentence";
import "./ReadSentenceArea.css";

class ReadSentenceArea extends React.Component {
  constructor(props) {
    this.state = {
      posts,
    };
  }
  // GET 등록된 문장 데이터
  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/");
      const posts = await res.json();
      this.setState({
        posts,
      });
    } catch (e) {
      console.log(e);
    }
    console.log(this.state.posts);
  }

  render() {
    console.log("redas");
    if (!this.props.show) {
      return (
        <div className="ReadSentenceArea">
          {this.props.data.map((obj) => (
            <Sentence key={obj.id} text={obj.content} />
          ))}
        </div>
      );
    } else {
      // console.log(this.props.data);
      // let sentenceList = [];
      // for (let i = this.props.show; i > 0; i--) {
      //   if (!this.props.data[-i]) {
      //     debugger;
      //     console.log(this.props.data[-i].text);
      //     sentenceList.push(<Sentence key={this.props.data[-i].id} text={this.props.data[-i].text} />);
      //   }
      // }
      return (
        <div className="ReadSentenceArea">
          <Sentence text={"."} />
          <Sentence text={"."} />
          <Sentence text={"."} />
          {this.props.data.slice(this.props.data.length < this.props.show ? 0 : this.props.data.length - this.props.show).map((obj) => (
            <Sentence key={obj.id} text={obj.content} />
          ))}
          {/* {sentenceList} */}
        </div>
      );
    }
  }
}

export default ReadSentenceArea;
