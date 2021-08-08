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
    VoteSentenceAreaList.sort(function (a, b) {
      const aDate = new Date(a.props.selectedData.date);
      const bDate = new Date(b.props.selectedData.date);
      if (aDate > bDate) {
        return -1;
      }
      if (aDate === bDate) {
        return 0;
      }
      if (aDate < bDate) {
        return 1;
      }
    });
    return <div>{VoteSentenceAreaList}</div>;
  }
}
export default VoteSentenceArea;
