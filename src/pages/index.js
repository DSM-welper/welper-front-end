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
  try {
    const { recommendList } = await (await getRecommendList()).data;
    return {
      data: recommendList,
    };
  } catch (err) {
    return { data: err.response.data.code };
  }
};
export default First;
