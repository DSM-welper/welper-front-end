import React from "react";
import Link from "next/link";
import NotFound from "./NotFound";
import { RecommendItem } from "./";
import "./FirstView.scss";

const SecondScreen = ({ items }) => {
  return (
    <div className="second-container">
      <section>
        {!(items === "INVALID_TOKEN") && items.length > 0 ? (
          <article>
            {items.map((item, i) => {
              return <RecommendItem key={i} id={item.servId} title={item.servNm} description={item.servDgst} category={item.jurOrgNm} />;
            })}
          </article>
        ) : (
          <NotFound errorText="추천 목록을 불러오는 데에 실패했습니다. 다시 시도하세요." />
        )}
        <Link href="category-list">
          <button className="main-button">더보기</button>
        </Link>
      </section>
    </div>
  );
};

export default SecondScreen;
