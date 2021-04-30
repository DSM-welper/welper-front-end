import CategoryHeader from "./CategoryHeader";
import "./Category.scss";
import PageTemplate from "../common/PageTemplate/PageTemplate";
import ListItem from "./ListItem";
import DefaultPage from "./DefaultPage";
import React, { useState, useEffect } from "react";
import { CategoryTag } from "../../lib/api/category";

const CategoryView = () => {
  let [getData, setGetData] = useState([]);
  let [isDefault, setIsDefault] = useState(true);
  let [listData, setList] = useState([]);
  let [page, setPage] = useState(0);
  const category = (data) => {
    setGetData(data);
  };

  useEffect(() => {
    if (getData.length !== 0) getSearch();
  }, [getData]);

  const getSearch = async () => {
    const categoryList = await (await CategoryTag(0, getData)).data;
    await setList(categoryList.servList);
    await setPage(categoryList.toTalPage);
    if (categoryList) setIsDefault(false);
    await setGetData([]);
  };

  return (
    <div className="background-public">
      <PageTemplate>
        <CategoryHeader category={category} onSearch={getSearch} />
        {isDefault ? (
          <DefaultPage />
        ) : (
          <div className="list-container">
            <ListItem list={listData} page={page} />
          </div>
        )}
      </PageTemplate>
    </div>
  );
};
export default React.memo(CategoryView);
