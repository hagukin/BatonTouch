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
*/
class CboxList extends Component{
    constructor(props){
        super(props);
        this.state = {
            cboxContents: this.props.initialContent,
            cboxOnPage: this.props.cboxOnPage,
        }
    }

    render(){
        var CboxList = [];
        for(var i = 0; i<this.state.cboxContents.length;i++){
            CboxList.push(<Cbox 
                key={this.state.cboxContents[i].id} 
                Main={this.state.cboxContents[i].writeMain} 
                Cmt={this.state.cboxContents[i].writeCmt}
                Recomm={this.state.cboxContents[i].recomm}
                cols={this.props.cols}
                rows={this.props.rows}
                ></Cbox>);
        }
        
        return(
            <div>
                {CboxList}
            </div>
        );
    }
}

export default CboxList;