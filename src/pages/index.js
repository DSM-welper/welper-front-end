import React from "react";
import "../assets/style/global.scss";
import { FirstView } from "../components/index";
import { getRecommendList } from "../lib/api/recommend";

const First = ({ data }) => {
  console.log(data);
  return (
    <div>
      <FirstView list={data}></FirstView>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const { recommendList } = await (await getRecommendList()).data;
    const data = recommendList;
    return { props: { data } };
  } catch (err) {
    let data = err.response.data.code;
    return { props: data };
  }
}
export default First;
