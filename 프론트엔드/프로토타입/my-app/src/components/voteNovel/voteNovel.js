import React, { Component } from "react";
import CboxList from "./cbox_list";
import Novel from "../Novel/Novel";

// json data
import cbox_list_data from "../../data/cbox_list.json";

class VoteNovel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample_cbox_list: cbox_list_data,
      rows: 1,
      cols: 140
    };
  }
  render() {
    // CboxList에 관한 코드
    var cboxOnPage = 1;
    var initialList = [];
    for (var i = 0; i < cboxOnPage; i++) {
      initialList.push(this.state.sample_cbox_list[i]);
      if (i === this.state.sample_cbox_list.length - 1) {
        break;
      }
    }
    

    return (
      <div className="VoteNovel">
        <Novel rows={this.state.rows} cols={this.state.cols}></Novel>
        <CboxList
          cboxListMaxIdx={this.state.sample_cbox_list.length - 1}
          cboxOnPage={cboxOnPage}
          initialContent={initialList}
          rows={this.state.rows}
          cols={this.state.cols}
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

export default VoteNovel;
