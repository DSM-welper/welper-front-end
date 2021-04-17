import React from "react";

const SearchItem = ({ title, category, description }) => {
  return (
    <div className="search-box">
      <div className="search-box-title">
        <h2>{title}</h2>
        <p>{category}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default SearchItem;
