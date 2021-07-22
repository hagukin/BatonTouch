import React, {Component} from 'react';
import Cbox from './simple_cbox';

/*
simple_cbox의 집합을 관리하는 컴포넌트 입니다.
본문, 주석 내용을 상위 컴포넌트에서 받아와 이를 하위 컴포넌트인 Cbox에 분배하는 역활을 담당합니다.
본문, 주석 내용은 배열의 형태로 저장하며, 이는 사용자 조작(btn)에 의하여 변경됩니다.

props
1. initialContent: 컴포넌트가 처음 마운트될때 Cbox에 분배할 내용을 가지고 있는 배열입니다. 
본문내용은 writeMain, 주석내용은 writeCmt로 정의되어야 합니다.

2. cboxOnPage: 한페이지에 나타낼 Cbox의 수를 정의하는 정수입니다.

3. callListContent(howMany, startIdx): startIdx의 다음 인덱스부터 howMany만큼을 initialContent와 같은 형식의 배열을 상위 컴포넌트로 부터
반환 받습니다.
-> 상위 컴포넌트의 state의 변화를 주지는 않습니다.

4. onRecommClick: 추천수의 변화를 상위 컴포넌트에 알립니다.
-> 상위 컴포넌트의 state중 recomm에 관한 정보를 저장하는 배열을 수정합니다.

5. 하위 컴포넌트에 줄 rows, cols: textarea의 rows,cols 프로퍼티
*/
class CboxList extends Component{
    constructor(props){
        super(props);
        this.state = {
            cboxContents: this.props.initialContent,
            cboxOnPage: this.props.cboxOnPage,
            lastIdx:(-1 + this.props.initialContent.length),
            firstIdx: 0,
        }
        this.onBtnNextClick = this.onBtnNextClick.bind(this);
        this.onBtnPrevClick = this.onBtnPrevClick.bind(this);
    }
    

    onBtnNextClick(){
        var newContent = [];
        if(this.state.lastIdx + this.state.cboxOnPage <= this.props.cboxListMaxIdx){
            newContent = this.props.callListContent(this.state.cboxOnPage, this.state.lastIdx);
            this.setState({
                cboxContents:newContent,
                cboxOnPage: this.state.cboxOnPage,
                lastIdx: this.state.lastIdx + newContent.length,
                firstIdx: this.state.lastIdx + 1, // 비 동기적이므로 가능한 코드
            });
        }else if(this.state.lastIdx < this.props.cboxListMaxIdx){
            newContent = this.props.callListContent(this.props.cboxListMaxIdx - this.state.lastIdx, this.state.lastIdx);
            this.setState({
                cboxContents:newContent,
                cboxOnPage: this.state.cboxOnPage,
                lastIdx: this.state.lastIdx + newContent.length,
                firstIdx: this.state.lastIdx + 1,
            });
        }
    }
    onBtnPrevClick(){
        var newContent = [];
        if(this.state.firstIdx - this.state.cboxOnPage >= 0){
            newContent = this.props.callListContent(this.state.cboxOnPage, (this.state.firstIdx-this.state.cboxOnPage -1));
            this.setState({
                cboxContents:newContent,
                cboxOnPage: this.state.cboxOnPage,
                lastIdx: this.state.firstIdx - 1,
                firstIdx: this.state.firstIdx - newContent.length,
            });
        }else if(this.state.firstIdx > 0){
            newContent = this.props.callListContent(this.state.firstIdx, -1);
            this.setState({
                cboxContents:newContent,
                cboxOnPage: this.state.cboxOnPage,
                lastIdx: this.state.firstIdx - 1,
                firstIdx: this.state.firstIdx - newContent.length,
            });
        }
    }

    render(){
        var CboxList = [];
        for(var i = 0; i<this.state.cboxContents.length;i++){
            CboxList.push(<Cbox 
                key={this.state.cboxContents[i].id} 
                id={this.state.cboxContents[i].id}
                Main={this.state.cboxContents[i].writeMain} 
                Cmt={this.state.cboxContents[i].writeCmt}
                Recomm={this.state.cboxContents[i].recomm}
                rows={this.props.rows}
                cols={this.props.cols}
                onRecommClick={function(id){
                    this.props.onRecommClick(id,this.state.firstIdx,this.state.lastIdx);
                }.bind(this)}></Cbox>);
        }
        return(
            <div className="vote_novel_tool_wrapper">
                <button className="search_cbox_btn" onClick={this.onBtnPrevClick}>이전</button>
                {CboxList}
                <button className="search_cbox_btn" onClick={this.onBtnNextClick}>다음</button>
            </div>
        );  
    }
}

export default CboxList;