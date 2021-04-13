import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Comment from "../../components/QnA/Comment/Comment";
import { getComment, addComment } from "../../lib/api/qna";
import { WarningToast, SuccessToast, ErrorToast } from "../../lib/toast";

const CommentContainer = () => {
  const router = useRouter();
  const id = router.query.id;
  const [commentData, setCommentData] = useState([]);
  const [page, setPage] = useState(1);
  const [commentInputs, setCommentInputs] = useState("");

  useEffect(() => {
    console.log(router);
    getComment(id, page)
      .then((res) => {
        res.data.totalOfPage < page ? WarningToast("더 이상 게시물이 없습니다.") : setCommentData(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const prevPage = useCallback(() => {
    page <= 1 ? WarningToast("가장 최근 페이지입니다.") : setPage(page - 1);
  }, [page]);

  const nextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const onSubmitComment = () => {
    addComment(id, { contents: commentInputs })
      .then(() => {
        SuccessToast("댓글 작성이 완료되었습니다.");
      })
      .catch(() => {
        ErrorToast("댓글 작성에 실패하였습니다. 다시 시도하세요.");
      });
  };

  const onChangeComments = (e) => {
    const value = e.target.value;
    setCommentInputs(value);
  };
  return (
    <>
      <Comment
        prevPage={prevPage}
        nextPage={nextPage}
        page={page}
        commentData={commentData}
        onSubmitComment={onSubmitComment}
        onChangeComments={onChangeComments}
      />
    </>
  );
};

export default CommentContainer;
