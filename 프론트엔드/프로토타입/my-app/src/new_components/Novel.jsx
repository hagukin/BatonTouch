import React from "react";
import InputSentenceBox from "./InputSentenceBox";
import ReadSentenceArea from "./ReadSentenceArea";
import VoteSentenceBox from "./VoteSentenceBox";

class Novel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedNovelData: [
        { text: "hello", recommend: 10, id: "fixed_0" },
        { text: "joonsuk", recommend: 10, id: "fixed_1" },
        { text: "king", recommend: 99, id: "fixed_2" },
      ],
      subNovelData: [{ text: "hello", recommend: 10, id: "sub_0" }],
    };
  }

  render() {
    return (
      <div>
        <ReadSentenceArea data={this.state.fixedNovelData} />
        <InputSentenceBox onAddSub={this.handleAddSub} />
        <VoteSentenceBox onAddRecommend={this.handleAddRecommend} data={this.state.subNovelData} />
      </div>
    );
  }

  handleAddSub = (_text) => {
    // subNovelData에 _text에 대응하는 객체 추가
    this.setState((prevState) => ({
      subNovelData: prevState.subNovelData.concat({ text: _text, recommend: 0, id: "sub_" + prevState.subNovelData.length }),
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
