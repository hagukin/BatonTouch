import React, {Component} from 'react';
import CboxList from './cbox_list';
import UCbox from './user_cbox';
// data
import novelListData from '../../data/comments.json'
import userData from '../../data/user_cbox.json'

class ShowNovel extends Component{
    constructor(props){
        super(props);
        this.state = {
            novelList : novelListData,
            cboxRows : 1,
            cboxCols : 140,
            userMode : "확인",
        }
    }
    render(){
        var formalList = [];
        for(var i = 0; i<this.state.novelList.length;i++){
            formalList.push({
                writeMain:this.state.novelList[i].contents,
                writeCmt:"임시 주석",
                recomm: this.state.novelList[i].recommend,
            })
        }
        return(
            <div>
                <CboxList initialContent={formalList} cboxOnPage={formalList.length} 
                cols={this.state.cboxCols} rows={this.state.cboxRows}></CboxList>
                <UCbox
                mainData={userData.mainValue}
                cmtData={userData.cmtValue}
                rows={this.state.cboxRows}
                cols={this.state.cboxCols}
                btnMode={this.state.userMode} 
                onSubmit={function(){
                    if(this.state.userMode === "확인"){
                        this.setState({
                            userMode: "수정"
                        })
                    }else{
                        this.setState({
                            userMode: "확인"
                        })
                    }
                }.bind(this)} ></UCbox>
            </div>
        );
    }
}

export default ShowNovel;