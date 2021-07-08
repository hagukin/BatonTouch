import React, {Component} from 'react';
import UCbox from './components/user_cbox'
import CboxList from './components/cbox_list';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      sample_cbox:{
        id:"admin1",
        writeMain:"본문 예제 1번",
        writeCmt:"주석 예제 1번"
      },
      sample_cbox_list: [
        {id:"admin2", writeMain:"본문 예제 2번", writeCmt:"주석 예제 2번",},
        {id:"admin3", writeMain:"본문 예제 3번", writeCmt:"주석 예제 3번",},
        {id:"admin4", writeMain:"본문 예제 4번", writeCmt:"주석 예제 4번",},
        {id:"admin5", writeMain:"본문 예제 5번", writeCmt:"주석 예제 5번",},
        {id:"admin6", writeMain:"본문 예제 6번", writeCmt:"주석 예제 6번",},
        {id:"admin7", writeMain:"본문 예제 7번", writeCmt:"주석 예제 7번",},
        {id:"admin8", writeMain:"본문 예제 8번", writeCmt:"주석 예제 8번",},
      ]
    }
  }
  render() {
    // CboxList에 관한 코드 start
    var cboxOnPage = 3;
    var initialList = [];
    for(var i =0;i < cboxOnPage;i++){
      initialList.push(this.state.sample_cbox_list[i]);
      if(i === this.state.sample_cbox_list.length - 1){
        break;
      }
    }
    // CboxList에 관한 코드 end
    return (
      <div className="App">
        <UCbox onSubmit={function(newMain,newCmt){
          this.setState({
            sample_cbox:{
              id:this.state.sample_cbox.id,
              writeMain:newMain,
              writeCmt:newCmt,
            }
          })
        }.bind(this)}></UCbox>
        <CboxList cboxListMaxIdx={this.state.sample_cbox_list.length - 1} cboxOnPage={cboxOnPage} initialContent={initialList}
        callListContent={function(howMany, startIdx){
          var newList = [];
          for(var i = 0;i<howMany;i++){
            newList.push(this.state.sample_cbox_list[i+startIdx+1]);
          }
          
          return newList;
        }.bind(this)}></CboxList>
      </div>
    );
  }
}

export default App;
