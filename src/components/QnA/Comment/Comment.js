import React from "react";
import { CommentItem, AddComment } from "./";
import "./Comment.scss";

const Comment = ({ page, prevPage, nextPage, commentData, onSubmitComment, onChangeComments, onDeleteComment }) => {
  return (
    <>
      <h1 className="qna-title">
        <span>A.</span>댓글
      </h1>
      {commentData && commentData.length > 0 ? (
        <>
          {commentData.map((c, i) => {
            return <CommentItem key={i} id={c.id} date={c.createdAt} contents={c.comment} writer={c.writer} onDeleteComment={onDeleteComment} />;
          })}
        </>
      ) : (
        <p style={{ margin: "1rem 0" }}>댓글이 없습니다. 작성해보세요.</p>
      )}
      <div className="page">
        <div className="page-wrapper">
          <div className="page-item" onClick={prevPage}>
            {"<"}
          </div>
          <div className="page-item color">{page}</div>
          <div className="page-item" onClick={nextPage}>
            {">"}
          </div>
        </div>
      </div>
      <AddComment onSubmitComment={onSubmitComment} onChangeComments={onChangeComments} />
    </>
  );
};

export default Comment;
