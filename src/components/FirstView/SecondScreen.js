import React from "react";
import NotFound from "./NotFound";
import { RecommendItem } from "./";
import "./FirstView.scss";

const SecondScreen = ({ items }) => {
  return (
    <div className="second-container">
      <section>
        {items && items.length > 0 ? (
          <article>
            {items.map((item, i) => {
              return <RecommendItem key={i} title={item.servNm} description={item.servDgst} category={item.jurOrgNm} />;
            })}
          </article>
        ) : (
          <NotFound />
        )}

        <button className="main-button">더보기</button>
      </section>
    </div>
  );
};

export default SecondScreen;
