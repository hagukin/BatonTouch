import React from "react";
import VoteSentenceBox from "../VoteSentenceBox/VoteSentenceBox";
import "./voteWrapper.css";
class VoteSentenceArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "upvote", // register: 등록순 , date: 날짜순, upvote: 따봉순
    };
  }

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
    // 투표중인 데이터 GET fetch
    data = this.getSentence();

    const VoteSentenceAreaList = data.map((x) => <VoteSentenceBox key={x.id} selectedData={x} />);
    this.orderBy(VoteSentenceAreaList, this.state.order); // 정렬

    return (
      <div>
        <select name="select_order" onChange={this.handleOnChangeSelect}>
          <option value="register" selected>
            등록순
          </option>
          <option value="date">날짜순</option>
          <option value="upvote">추천순</option>
        </select>
        {VoteSentenceAreaList}
      </div>
    );
  }

  async getSentence() {
    let res;
    let posts;
    try {
      res = await fetch("http://127.0.0.1:8000/api/novels");
      posts = await res.json();
    } catch (e) {
      console.log(e);
    }

    return posts;
  }

  handleOnChangeSelect = (e) => {
    this.setState({
      order: e.target.options[e.target.selectedIndex].value,
    });
  };

  orderBy(list, method) {
    if (method === "register") {
      return;
    } else if (method === "date") {
      list.sort(function (a, b) {
        const aDate = new Date(a.props.selectedData.date);
        const bDate = new Date(b.props.selectedData.date);
        if (aDate > bDate) {
          return -1;
        }
        if (aDate === bDate) {
          return 0;
        }
        if (aDate < bDate) {
          return 1;
        }
      });
    } else if (method === "upvote") {
      // upvote순 정렬
      list.sort(function (a, b) {
        const aVote = a.props.selectedData.upvote;
        const bVote = b.props.selectedData.upvote;
        if (aVote > bVote) {
          return -1;
        }
        if (aVote === bVote) {
          return 0;
        }
        if (aVote < bVote) {
          return 1;
        }
      });
    }
  }
}
export default VoteSentenceArea;
