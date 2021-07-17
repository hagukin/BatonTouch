import React, {Component} from 'react';
import UCbox from './user_cbox';
// data
import userData from '../../data/user_cbox.json'
import Novel from '../Novel/Novel';

class ShowNovel extends Component{
    constructor(props){
        super(props);
        this.state = {
            cboxRows : 1,
            cboxCols : 140,
            userMode : "확인",
        }    
    }
    render(){
        return(
            <div>
                <Novel cols={this.state.cboxCols} rows={this.state.cboxRows}></Novel>
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