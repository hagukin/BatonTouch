import React from "react";
import VoteSentenceBox from "../VoteSentenceBox/VoteSentenceBox";
class VoteSentenceArea extends React.Component {
  constructor(props) {
    super(props);
  }

  // async componentDidMount() {
  //   try {
  //     const res = await fetch("http://127.0.0.1:8000/api/");
  //     const posts = await res.json();
  //     this.setState({
  //       posts,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  render() {
    const VoteSentenceAreaList = this.props.data.map((x) => <VoteSentenceBox key={x.id} selectedData={x} />);
    return <div>{VoteSentenceAreaList}</div>;
  }
}
export default VoteSentenceArea;
