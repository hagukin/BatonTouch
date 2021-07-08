import React, {Component} from 'react';
/*
사용자 입력 cbox를 구현하는 컴포넌트 입니다.
props
1. onSubmit 핸들러: 사용자가 입력한 본문과 주석을 상위 컴포넌트에 반환합니다.
*/
class UCbox extends Component{
    constructor(props){
        super(props);
        this.state = {
            MainValue:"본문을 입력하세요",
            CmtValue:"주석을 입력하세요",
            isCmtOn: false
        }
        this.btnCmtClick = this.btnCmtClick.bind(this);
        this.handleChangeMain = this.handleChangeMain.bind(this);
        this.handleChangeCmt = this.handleChangeCmt.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    btnCmtClick() {
        this.setState({
            isCmtOn: !this.state.isCmtOn
        });
    }

    handleChangeMain(event){
        this.setState({MainValue:event.target.value});
    }
    handleChangeCmt(event){
        this.setState({CmtValue:event.target.value});
    }
    handleSubmit(event){
        this.props.onSubmit(this.state.MainValue, this.state.CmtValue);
    }

    render(){
        var cboxMain = <textarea name="cboxMain" value={this.state.MainValue} 
        onChange={this.handleChangeMain}></textarea>;
        var cboxCmt = <textarea name="cboxCmt" value={this.state.CmtValue}
        onChange={this.handleChangeCmt}></textarea>;

        var cboxText = null;
        if (this.state.isCmtOn === false) {
            cboxText = cboxMain;
        } else {
            cboxText = cboxCmt;
        }

        return(
            <div>
                {cboxText}
                <button onClick={this.btnCmtClick}>현 상태:{this.state.isCmtOn ? '주석' : '본문'}</button>
                <button onClick={this.handleSubmit}>확인</button>
            </div>
        );
    }
}

export default UCbox;