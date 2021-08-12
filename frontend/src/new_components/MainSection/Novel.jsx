import React from "react";
import InputSentenceBox from "./InputSentenceBox/InputSentenceBox";
import ReadSentenceArea from "./ReadSentenceArea/ReadSentenceArea";
import VoteSentenceArea from "./VoteSentenceArea/VoteSentenceArea";
import { Route } from "react-router-dom";
import "./Novel.css";
class Novel extends React.Component {
  // GET compoenntdIdmount
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
  // }

  render() {
    return (
      <div className="Novel">
        <Route exact path="/">
          <ReadSentenceArea />
        </Route>
        <Route path="/read">
          <ReadSentenceArea />
        </Route>
        <Route path="/contribute">
          <ReadSentenceArea show={5} />
          <InputSentenceBox onPost={this.forceRender} />
          {/* <VoteSentenceBox onAddRecommend={this.handleAddRecommend} data={this.state.subNovelData} /> */}
          <VoteSentenceArea onVote={this.forceRender} />
        </Route>
      </div>
    );
  }

  forceRender = () => {
    console.log("force");
    this.forceUpdate();
  };

  // handleAddSub = (_text) => {
  //   // subNovelData에 _text에 대응하는 객체 추가
  //   this.setState((prevState) => ({
  //     subNovelData: prevState.subNovelData.concat({
  //       writer: "ㅇㅇ",
  //       title: "mysql1",
  //       date: new Date().toISOString(),
  //       upvote: 0,
  //       downvote: 0,
  //       position: 0,
  //       end_story: false,
  //       content: _text,
  //       id: "sub_" + prevState.subNovelData.length,
  //     }),
  //   }));
  // };

  // handleAddRecommend = (destId) => {
  //   // debugger;
  //   this.setState({
  //     subNovelData: this.state.subNovelData.map((elem) => {
  //       if (elem.id === destId) {
  //         elem.recommend = elem.recommend + 1;
  //       }
  //       return elem;
  //     }),
  //   });
  // };
}

export default Novel;
