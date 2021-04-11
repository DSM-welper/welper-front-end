import "./QnA.scss";
import QnAPageTemplate from "../common/QnAPageTemplate/QnAPageTemplate";
import Comment from "./Comment/Comment";

const QnADetail = () => {
  return (
    <QnAPageTemplate>
      <h1 className="qna-title">
        <span>Q.</span>님들아 어쩌구 복지 신청해보신 분 있음?
      </h1>
      <p className="qna-contents">
        나 지금 어쩌구 어쩌구 이러쿵 저러쿵 상황인데 이 복지 괜찮은 것 같음?? 후기점 나 지금 어쩌구 어쩌구 이러쿵 저러쿵 상황인데 이 복지 괜찮은 것
        같음?? 후기점 나 지금 어쩌구 어쩌구 이러쿵 저러쿵 상황인데 이 복지 괜찮은 것 같음?? 후기점 나 지금 어쩌구 어쩌구 이러쿵 저러쿵 상황인데 이
        복지 괜찮은 것 같음?? 후기점
      </p>
      <Comment />
    </QnAPageTemplate>
  );
};

export default QnADetail;
