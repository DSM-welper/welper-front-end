import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Comment from "../../components/QnA/Comment/Comment";
import { getComment, addComment, deleteComment } from "../../lib/api/qna";
import { WarningToast, SuccessToast, ErrorToast } from "../../lib/toast";

const CommentContainer = ({ getToken }) => {
  const router = useRouter();
  const id = router.query.id;
  const [commentData, setCommentData] = useState([]);
  const [page, setPage] = useState(1);
  const [commentInputs, setCommentInputs] = useState("");

  useEffect(() => {
    getToken();
    getComment(id, page)
      .then((res) => {
        if (!res.data.totalOfPage < page) setCommentData(res.data.list);
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

  const onDeleteComment = (commentId) => {
    deleteComment(id, commentId)
      .then(() => {
        SuccessToast("댓글 삭제가 완료되었습니다.");
        setTimeout(() => {
          window.location.reload();
        }, 300);
      })
      .catch(() => {
        ErrorToast("삭제에 실패하였습니다. 다시 시도하세요.");
      });
  };
  const onSubmitComment = () => {
    addComment(id, { contents: commentInputs })
      .then(() => {
        SuccessToast("댓글 작성이 완료되었습니다.");
        setTimeout(function () {
          window.location.reload();
        }, 300);
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
        onDeleteComment={onDeleteComment}
      />
    </>
  );
};

export default CommentContainer;
