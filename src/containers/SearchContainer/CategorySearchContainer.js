import React, { useState, useEffect, useRef } from "react";
import { ListItem, ListDefault, CategoryHedaer } from "../../components";
import { PageTemplate } from "../../components/common";
import { CategoryTag } from "../../lib/api/category";
import { WarningToast } from "../../lib/toast";
import { useInView } from "react-intersection-observer";

import { category_datail } from "../../assets/img";

const CategorySearchContainer = () => {
  let [getData, setGetData] = useState([]);
  let [isDefault, setIsDefault] = useState(true);
  let [listData, setList] = useState([]);
  let [page, setPage] = useState(0);
  let [toTalPage, setTotal] = useState(0);
  let [ref, inView] = useInView();

  const category = (data) => {
    setGetData(data);
    if (data.length == 0) {
      setPage(0);
      if (isDefault == false) document.getElementById("list").scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (getData.length != 0) getSearch();
  }, [getData]);

  useEffect(() => {
    if (inView) {
      scrollPage();
    }
  }, [inView]);

  const getSearch = async () => {
    const categoryList = await (await CategoryTag(page, getData)).data;
    setList(categoryList.servList);
    setTotal(categoryList.toTalPage);
    if (categoryList) setIsDefault(false);
    setPage((page) => page + 1);
  };

  const scrollPage = async () => {
    if (toTalPage == page) {
      WarningToast("마지막 페이지입니다.");
      return 0;
    } else {
      const list = await (await CategoryTag(page, getData)).data;
      setList(listData.concat(list.servList));
      setPage((page) => page + 1);
    }
  };

  return (
    <div className="background-public">
      <PageTemplate>
        <CategoryHedaer category={category} onSearch={getSearch} />
        {isDefault ? (
          <ListDefault />
        ) : (
          <div className="list-container" id="list">
            <ListItem list={listData} ref={ref} />
          </div>
        )}
      </PageTemplate>
    </div>
  );
};

export default React.memo(CategorySearchContainer);
