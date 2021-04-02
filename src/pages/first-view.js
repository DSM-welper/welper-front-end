import React from "react";
import { FirstView } from "../components/index";
import { getRecommendList } from "../lib/api/recommend";

const First = ({ data }) => {
  return (
    <div>
      <FirstView list={data}></FirstView>
    </div>
  );
};
First.getInitialProps = async () => {
  const { recommendList } = await (await getRecommendList()).data;
  return {
    data : recommendList,
  };
};
export default First;
