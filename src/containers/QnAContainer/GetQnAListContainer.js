import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import QnA from "../../components/QnA/QnA";
import { WarningToast, ErrorToast, SuccessToast } from "../../lib/toast";
import { getQnAList, getMyQnAList, deletePost } from "../../lib/api/qna";
import client from "../../lib/api/client";
import cookie from "js-cookie";

const GetQnAListContainer = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [list, setList] = useState();

  useEffect(() => {
    const token = cookie.get("accessToken");
    token ? (client.defaults.headers.common["Authorization"] = token) : router.push("/login");
    router.pathname === "/qna/mine"
      ? getMyQnAList(page)
          .then((res) => {
            setTotal(res.data.totalOfPage);
            res.data.totalOfPage < page ? WarningToast("더 이상 게시물이 없습니다.") : setList(res.data.post);
          })
          .catch(() => {
            WarningToast("로그인이 필요합니다.");
            router.push("/login");
          })
      : getQnAList(page)
          .then((res) => {
            setTotal(res.data.totalOfPage);
            res.data.totalOfPage < page ? WarningToast("더 이상 게시물이 없습니다.") : setList(res.data.post);
          })
          .catch(() => {
            WarningToast("로그인이 필요합니다.");
            router.push("/login");
          });
  }, [page]);

  const onDeletePost = (postId) => {
    deletePost(postId)
      .then(() => {
        SuccessToast("글 삭제가 완료되었습니다.");
        router.push("/qna");
      })
      .catch(() => {
        ErrorToast("삭제에 실패하였습니다. 다시 시도하세요.");
      });
  };

  const prevPage = useCallback(() => {
    page <= 0 ? WarningToast("가장 최근 페이지입니다.") : setPage(page - 1);
  }, [page]);

  const nextPage = useCallback(() => {
    if (total < page) return;
    setPage(page + 1);
  }, [page]);

  return (
    <>
      <QnA postList={list} prevPage={prevPage} nextPage={nextPage} page={page} onDeletePost={onDeletePost} />
    </>
  );
};

export default GetQnAListContainer;
