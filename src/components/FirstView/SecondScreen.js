import React from "react";
import { RecommendItem } from "./";
import "./FirstView.scss";

const SecondScreen = () => {
  return (
    <div className="second-container">
      <section>
        <article>
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
        </article>
        <button className="main-button">더보기</button>
      </section>
    </div>
  );
};

export default SecondScreen;
