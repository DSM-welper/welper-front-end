import "./QnA.scss";
import QnAPageTemplate from "../common/QnAPageTemplate/QnAPageTemplate";

const QnADetail = ({ title, content, children }) => {
  return (
    <QnAPageTemplate>
      <h1 className="qna-title">
        <span>Q.</span>
        {title ? title : null}
      </h1>
      <p className="qna-contents">{content ? content : null}</p>
      {children}
    </QnAPageTemplate>
  );
};

export default QnADetail;
