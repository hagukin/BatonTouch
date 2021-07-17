import React, {Component} from 'react';
import CboxList from './cbox_list';
// data
import novelListData from '../../data/comments.json'

class VoteNovel extends Component{
    constructor(props){
        super(props);
        this.state = {
            novelList : novelListData,
            cboxRows : 1,
            cboxCols : 140,
        }
    }
    render(){
        var formalList = [];
        for(var i = 0; i<this.state.novelList.length;i++){
            formalList.push({
                writeMain:this.state.novelList[i].contents,
                writeCmt:"임시 주석",
                recomm: this.state.novelList[i].recommend,
                id:this.state.novelList[i].id,
            })
        }
        return(
            <div>
                <CboxList initialContent={formalList} cboxOnPage={formalList.length} 
                cols={this.state.cboxCols} rows={this.state.cboxRows}></CboxList>
            </div>
        );
    }
}

export default VoteNovel;