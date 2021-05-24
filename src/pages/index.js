import React from "react";
import "../assets/style/global.scss";
import { FirstView } from "../components/index";
import { getRecommendList } from "../lib/api/recommend";

const First = ({ data }) => {
  return (
    <div>
      <FirstView list={data}></FirstView>
    </div>
  );
};
export async function getInitialProps() {
  try {
    const { recommendList } = await (await getRecommendList()).data;
    const data = recommendList;
    return { props: { data } };
  } catch (err) {
    return { props: { data: err.response.data.code } };
  }
}
export default First;
