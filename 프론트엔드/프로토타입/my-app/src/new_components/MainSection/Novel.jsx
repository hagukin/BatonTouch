import React from "react";
import InputSentenceBox from "./InputSentenceBox/InputSentenceBox";
import ReadSentenceArea from "./ReadSentenceArea/ReadSentenceArea";
import VoteSentenceBox from "./VoteSentenceBox/VoteSentenceBox";
import VoteSentenceArea from "./VoteSentenceArea/VoteSentenceArea";
import { Route } from "react-router-dom";
import data from "./_data.json";
import "./Novel.css";
class Novel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedNovelData: data,
      subNovelData: [
        {
          id: 1,
          writer: "",
          title: "mysql1",
          content: "1",
          comment: "",
          date: "2021-08-01T11:30:57.618483Z",
          upvote: 0,
          downvote: 0,
          position: 0,
          end_story: false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="Novel">
        <Route path="/main">
          <ReadSentenceArea data={this.state.fixedNovelData} />
        </Route>
        <Route path="/read">
          <ReadSentenceArea data={this.state.fixedNovelData} />
        </Route>
        <Route path="/contribute">
          <ReadSentenceArea show={5} data={this.state.fixedNovelData} />
          <InputSentenceBox onAddSub={this.handleAddSub} />
          {/* <VoteSentenceBox onAddRecommend={this.handleAddRecommend} data={this.state.subNovelData} /> */}
          <VoteSentenceArea data={this.state.subNovelData} />
        </Route>
      </div>
    );
  }

  handleAddSub = (_text) => {
    // subNovelData에 _text에 대응하는 객체 추가
    this.setState((prevState) => ({
      subNovelData: prevState.subNovelData.concat({
        writer: "",
        title: "mysql1",
        date: new Date(),
        upvote: 0,
        downvote: 0,
        position: 0,
        end_story: false,
        content: _text,
        id: "sub_" + prevState.subNovelData.length,
      }),
    }));
  };

  handleAddRecommend = (destId) => {
    // debugger;
    this.setState({
      subNovelData: this.state.subNovelData.map((elem) => {
        if (elem.id === destId) {
          elem.recommend = elem.recommend + 1;
        }
        return elem;
      }),
    });
  };
}

export default Novel;
