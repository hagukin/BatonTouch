import React from "react";
import Sentence from "./Sentence";
import "./ReadSentenceArea.css";

class ReadSentenceArea extends React.Component {
  // constructor(props) {
  //   this.state = {
  //     posts,
  //   };
  // }
  // GET 등록된 문장 데이터
  // async componentDidMount() {
  //   try {
  //     const res = await fetch("http://127.0.0.1:8000/api/");
  //     const posts = await res.json();
  //     this.setState({
  //       posts,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   console.log(this.state.posts);
  // }

  render() {
    // GET fetch
    // const data = this.getSentence();
    const data = [
      {
        id: 2,
        writer: "ㅇㅇ",
        title: "mysql1",
        content: "2020년sssss",
        comment: "",
        date: "2020-08-01T11:30:57.618483Z",
        upvote: 10,
        downvote: 0,
        position: 0,
        end_story: false,
      },
    ];

    console.log("redas");
    if (!this.props.show) {
      return (
        <div className="ReadSentenceArea">
          {data.map((obj) => (
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
          <Sentence text={"aaaaaaaaaaaaaaaaa"} />
          <Sentence text={"bbbbbbbbbbbbbbbbb"} />
          <Sentence text={"ccccccccccccccccc"} />
          {data.slice(data.length < this.props.show ? 0 : data.length - this.props.show).map((obj) => (
            <Sentence key={obj.id} text={obj.content} />
          ))}
          {/* {sentenceList} */}
        </div>
      );
    }
  }

  async getSentence() {
    let res;
    let posts;
    try {
      res = await fetch("http://127.0.0.1:8000/api/novel");
      posts = await res.json();
    } catch (e) {
      console.log(e);
    }

    return posts;
  }
}

export default ReadSentenceArea;
