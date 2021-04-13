import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import QnADetail from "../../components/QnA/QnADetail";
import { getQnADetail } from "../../lib/api/qna";
import GetCommentContainer from "./CommentContainer";

const GetQnADetailContainer = () => {
  const router = useRouter();
  const id = router.query.id;
  const [qnAData, setQnAData] = useState({ title: "", content: "" });

  useEffect(() => {
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
        <GetCommentContainer />
      </QnADetail>
    </>
  );
};

export default GetQnADetailContainer;
