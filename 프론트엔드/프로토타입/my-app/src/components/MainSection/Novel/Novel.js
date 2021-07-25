import React, { Component } from "react";
import CboxList from "./cbox_list";
// data
import novelListData from "../../../data/comments.json";

/*
props
1. rows : textarea rows 프로퍼티에 할당될 값
2. cols : textarea cols 프로퍼티에 할당될 값
 */
class Novel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      novelList: novelListData,
      cboxRows: this.props.rows,
      cboxCols: this.props.cols,
    };
  }
  render() {
    var formalList = [];
    for (var i = 0; i < this.state.novelList.length; i++) {
      formalList.push({
        writeMain: this.state.novelList[i].contents,
        writeCmt: "임시 주석",
        recomm: this.state.novelList[i].recommend,
        id: this.state.novelList[i].id,
      });
    }
    return (
      <div>
        <CboxList initialContent={formalList} cboxOnPage={formalList.length} cols={this.state.cboxCols} rows={this.state.cboxRows}></CboxList>
      </div>
    );
  }
}

export default Novel;
