import React, { Component } from "react";
import UCbox from "./user_cbox";
import CboxList from "./cbox_list";

class WriteNovel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uCboxMode: "write",
      sample_cbox: {
        id: "admin1",
        writeMain: "본문 예제 1번",
        writeCmt: "주석 예제 1번",
      },
      sample_cbox_list: [
        { id: "admin2", writeMain: "본문 예제 2번", writeCmt: "주석 예제 2번", recomm: 10 },
        { id: "admin3", writeMain: "본문 예제 3번", writeCmt: "주석 예제 3번", recomm: 25 },
        { id: "admin4", writeMain: "본문 예제 4번", writeCmt: "주석 예제 4번", recomm: 7 },
        { id: "admin5", writeMain: "본문 예제 5번", writeCmt: "주석 예제 5번", recomm: 99 },
        { id: "admin6", writeMain: "본문 예제 6번", writeCmt: "주석 예제 6번", recomm: 301 },
        { id: "admin7", writeMain: "본문 예제 7번", writeCmt: "주석 예제 7번", recomm: 7 },
        { id: "admin8", writeMain: "본문 예제 8번", writeCmt: "주석 예제 8번", recomm: 0 },
      ],
    };
  }
  render() {
    // CboxList에 관한 코드
    var cboxOnPage = 3;
    var initialList = [];
    for (var i = 0; i < cboxOnPage; i++) {
      initialList.push(this.state.sample_cbox_list[i]);
      if (i === this.state.sample_cbox_list.length - 1) {
        break;
      }
    }
    // UCbox에 관한 코드
    var uCbox = null;
    if (this.state.uCboxMode === "write") {
      uCbox = (
        <UCbox
          btnMode={"확인"}
          onSubmit={function (newMain, newCmt) {
            var newCbox = this.state.sample_cbox_list.concat({ id: this.state.sample_cbox.id, writeMain: newMain, writeCmt: newCmt, recomm: 0 });
            this.setState({
              uCboxMode: "devise",
              sample_cbox: {
                id: this.state.sample_cbox.id,
                writeMain: newMain,
                writeCmt: newCmt,
              },
              sample_cbox_list: newCbox,
            });
          }.bind(this)}
        ></UCbox>
      );
    } else {
      uCbox = (
        <UCbox
          btnMode={"수정"}
          onSubmit={function () {
            var newCboxList = Array.from(this.state.sample_cbox_list);
            for (var i = 0; i < newCboxList.length; i++) {
              if (this.state.sample_cbox.id === newCboxList[i].id) {
                newCboxList.splice(i, 1);
                break;
              }
            }
            this.setState({
              uCboxMode: "write",
              sample_cbox_list: newCboxList,
            });
          }.bind(this)}
        ></UCbox>
      );
    }

    return (
      <div>
        {uCbox}
        <CboxList
          cboxListMaxIdx={this.state.sample_cbox_list.length - 1}
          cboxOnPage={cboxOnPage}
          initialContent={initialList}
          onRecommClick={function (id, startIdx, endIdx) {
            for (var i = startIdx; i <= endIdx; i++) {
              if (this.state.sample_cbox_list[i].id === id) {
                var newContent = this.state.sample_cbox_list;
                newContent[i].recomm++;
                this.setState({
                  sample_cbox_list: newContent,
                });
              }
            }
          }.bind(this)}
          callListContent={function (howMany, startIdx) {
            var newList = [];
            for (var i = 0; i < howMany; i++) {
              newList.push(this.state.sample_cbox_list[i + startIdx + 1]);
            }
            return newList;
          }.bind(this)}
        ></CboxList>
      </div>
    );
  }
}

export default WriteNovel;
