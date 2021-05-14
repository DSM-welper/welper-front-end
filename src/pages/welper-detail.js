import { DetailView } from "../components/Detail";
import { CategoryDetail } from "../lib/api/category";
import React from "react";

const Detail = ({ data }) => {
  return <DetailView content={data}></DetailView>;
};

Detail.getInitialProps = async (context) => {
  const getCategoryDetail = await (await CategoryDetail(context.query.id)).data;
  return {
    data: getCategoryDetail,
  };
};

export default Detail;
