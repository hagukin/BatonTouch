import SentenceBox from "../components/readNovel/SentenceBox";
import RecommendButton from "../components/readNovel/RecommendButton";

// Json객체로부터 데이터 불러오는 함수
export function loadcommentsJsonToList(comments) {
  if (comments) {
    var comment_list = [];
    for (var key in comments) {
      comment_list.push(
        <div key={key} className="SentenceFlex">
          <SentenceBox content={comments[key].contents}></SentenceBox>
          <RecommendButton fixed={false} value={comments[key].recommend}></RecommendButton>
        </div>
      );
    }
    return comment_list;
  }
}
