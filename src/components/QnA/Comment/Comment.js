import React from "react";
import { CommentItem, AddComment } from "./";
import "./Comment.scss";

const Comment = () => {
  return (
    <>
      <h1 className="qna-title">
        <span>A.</span>댓글
      </h1>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <div className="page">
        <div className="page-wrapper">
          <div className="page-item">{"<"}</div>
          <div className="page-item color">1</div>
          <div className="page-item">{">"}</div>
        </div>
      </div>
      <AddComment />
    </>
  );
};

export default Comment;
