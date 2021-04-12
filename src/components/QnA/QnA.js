import { QnAListItem } from "./";
import "./QnA.scss";
import QnAPageTemplate from "../common/QnAPageTemplate/QnAPageTemplate";
import NotFound from "../FirstView/NotFound";

const QnA = ({ postList, prevPage, nextPage, page }) => {
  return (
    <>
      <QnAPageTemplate>
        {postList && postList.length > 0 ? (
          <article>
            {postList.map((p, i) => {
              return <QnAListItem key={i} id={p.id} title={p.title} writer={p.writer} date={p.creatAt} />;
            })}
          </article>
        ) : (
          <NotFound errorText="더 이상 글이 없습니다." />
        )}
        <div className="page">
          <div className="page-wrapper">
            <div className="page-item" onClick={prevPage}>
              {"<"}
            </div>
            <div className="page-item color">{page + 1}</div>
            <div className="page-item" onClick={nextPage}>
              {">"}
            </div>
          </div>
        </div>
      </QnAPageTemplate>
    </>
  );
};

export default QnA;
