import React from "react";
import "./Search.scss";
import SearchItem from "./SearchItem";
import NotFound from "../FirstView/NotFound";

const Search = ({ list, prevPage, nextPage, page }) => {
  console.log(list);
  return (
    <div className="search">
      {!(typeof list === "string") ? (
        list.map((l, i) => {
          return <SearchItem key={i} title={l.servNm} description={l.servDgst} category={l.jurOrgNm} />;
        })
      ) : (
        <div style={{ width: "100%", marginTop: "4rem" }}>
          <NotFound errorText={"검색 결과가 없습니다."} />
        </div>
      )}
      <div className="page">
        <div className="page-wrapper">
          <div className="page-item" onClick={prevPage}>
            {"<"}
          </div>
          <div className="page-item color">{page + 1}</div>
          <div className="page-item" onClick={nextPage}>
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
