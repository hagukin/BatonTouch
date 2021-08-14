import React from "react";
import VoteSentenceBox from "../VoteSentenceBox/VoteSentenceBox";
import SearchButton from "../VoteSentenceBox/SearchNextButton";
import "./voteWrapper.css";
class VoteSentenceArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
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
    // const data = this.getSentence();
    const data = [
      {
        id: 3,
        writer: "ㅇㅇ",
        title: "mysql1",
        content: "2020년",
        comment: "",
        date: "2020-08-01T11:30:57.618483Z",
        upvote: 10,
        downvote: 0,
        position: 0,
        end_story: false,
      },
      {
        id: 4,
        writer: "ㅇㅇ",
        title: "mysql1",
        content: "2020년",
        comment: "",
        date: "2020-08-01T11:30:57.618483Z",
        upvote: 10,
        downvote: 0,
        position: 0,
        end_story: false,
      },
      {
        id: 5,
        writer: "ㅇㅇ",
        title: "mysql1",
        content: "2020년",
        comment: "",
        date: "2020-08-01T11:30:57.618483Z",
        upvote: 10,
        downvote: 0,
        position: 0,
        end_story: false,
      },
      {
        id: 6,
        writer: "ㅇㅇ",
        title: "mysql1",
        content: "2020년",
        comment: "",
        date: "2020-08-01T11:30:57.618483Z",
        upvote: 10,
        downvote: 0,
        position: 0,
        end_story: false,
      },
      {
        id: 7,
        writer: "ㅇㅇ",
        title: "mysql1",
        content: "2020년",
        comment: "",
        date: "2020-08-01T11:30:57.618483Z",
        upvote: 109999,
        downvote: 0,
        position: 0,
        end_story: false,
      },
      {
        id: 8,
        writer: "ㅇㅇ",
        title: "mysql1",
        content: "2020년",
        comment: "",
        date: "2020-08-01T11:30:57.618483Z",
        upvote: 10,
        downvote: 0,
        position: 0,
        end_story: false,
      },
      {
        id: 9,
        writer: "ㅇㅇ",
        title: "mysql1",
        content: "2020년",
        comment: "",
        date: "2020-08-01T11:30:57.618483Z",
        upvote: 10,
        downvote: 0,
        position: 0,
        end_story: false,
      },
      {
        id: 10,
        writer: "ㅇㅇ",
        title: "mysql1",
        content: "10번째",
        comment: "",
        date: "2020-08-01T11:30:57.618483Z",
        upvote: 10,
        downvote: 0,
        position: 0,
        end_story: false,
      },
      {
        id: 11,
        writer: "ㅇㅇ",
        title: "mysql1",
        content: "2020년",
        comment: "",
        date: "2020-08-01T11:30:57.618483Z",
        upvote: 10,
        downvote: 0,
        position: 0,
        end_story: false,
      },
      {
        id: 12,
        writer: "ㅇㅇ",
        title: "mysql1",
        content: "12번째",
        comment: "",
        date: "2020-08-01T11:30:57.618483Z",
        upvote: 10,
        downvote: 0,
        position: 0,
        end_story: false,
      },
      {
        id: 13,
        writer: "ㅇㅇ",
        title: "mysql1",
        content: "13번째",
        comment: "",
        date: "2020-08-01T11:30:57.618483Z",
        upvote: 1100,
        downvote: 0,
        position: 0,
        end_story: false,
      },
    ];

    if (!data.length) {
      return <p>등록된 문장이 없당</p>;
    }

    const VoteSentenceAreaList = data.map((x) => <VoteSentenceBox key={x.id} selectedData={x} onVote={this.onVote} />);
    this.orderBy(VoteSentenceAreaList, this.state.order); // 정렬

    return (
      <div className="voteWrapper">
        <select className="voteOrder" name="select_order" onChange={this.handleOnChangeSelect}>
          <option value="register" selected>
            등록순
          </option>
          <option value="date">날짜순</option>
          <option value="upvote">추천순</option>
        </select>
        {VoteSentenceAreaList.slice(this.state.page * 5, (this.state.page + 1) * 5)}
        <div className="voteContainer">
          <SearchButton prev page={this.state.page} length={data.length} onClick={this.handleOnClick} />
          <SearchButton next page={this.state.page} length={data.length} onClick={this.handleOnClick} />
          <span className="prevArrow">{"<"}</span>
          <span className="nextArrow">{">"}</span>
        </div>  
      </div>
    );
  }

  handleOnClick = (mode) => {
    if (mode === "prev") {
      this.setState((prev) => ({
        page: prev.page - 1,
      }));
    } else if (mode === "next") {
      this.setState((prev) => ({
        page: prev.page + 1,
      }));
    }
  };

  onVote = () => {
    this.props.onVote();
  };

  async getSentence() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/");
      const posts = await res.json();
      return posts;
    } catch (e) {
      console.log(e);
      return undefined;
    }
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
