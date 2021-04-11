import React from "react";
import { useRouter } from "next/router";
import { QnADetail } from "../../containers";

const index = () => {
  const router = useRouter();
  return (
    <>
      <QnADetail id={router.query.id} />
    </>
  );
};

export default index;
