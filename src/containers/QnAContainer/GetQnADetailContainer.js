import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import QnADetail from "../../components/QnA/QnADetail";
import { getQnADetail } from "../../lib/api/qna";
import GetCommentContainer from "./CommentContainer";
import client from "../../lib/api/client";
import cookie from "js-cookie";

const GetQnADetailContainer = () => {
  const router = useRouter();
  const id = router.query.id;
  const [qnAData, setQnAData] = useState({ title: "", content: "" });

  const getToken = useCallback(() => {
    const token = cookie.get("accessToken");
    token ? (client.defaults.headers.common["Authorization"] = token) : router.push("/login");
  }, []);

  useEffect(() => {
    getToken();
    getQnADetail(id)
      .then((res) => {
        setQnAData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <QnADetail title={qnAData.title} content={qnAData.content}>
        <GetCommentContainer getToken={getToken} />
      </QnADetail>
    </>
  );
};

export default GetQnADetailContainer;
