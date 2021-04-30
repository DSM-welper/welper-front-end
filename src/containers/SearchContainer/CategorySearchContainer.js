import React, { useState, useEffect } from "react";
import { ListItem, ListDefault, CategoryHedaer } from "../../components";
import { PageTemplate } from "../../components/common";
import { CategoryTag } from "../../lib/api/category";
import { WarningToast, ErrorToast } from "../../lib/toast";

const CategorySearchContainer = () => {
  let [getData, setGetData] = useState([]);
  let [isDefault, setIsDefault] = useState(true);
  let [listData, setList] = useState([]);
  let [page, setPage] = useState(0);
  let [toTalPage, setTotal] = useState(0);
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

  const getSearch = async () => {
    await CategoryTag(page, getData)
      .then((list) => {
        setList(list.data.servList);
        setTotal(list.data.toTalPage);
        setIsDefault(false);
      })
      .catch((err) => {
        if (err.response.data.code === "NON_EXIST_PAGE")
          ErrorToast("검색 결과가 없습니다.");
      });
    setPage((page) => page + 1);
  };

  const scrollPage = async () => {
    await CategoryTag(page, getData)
      .then((list) => {
        setList(listData.concat(list.data.servList));
        setPage((page) => page + 1);
      })
      .catch((err) => {
        console.log(err.response.code);
      });
  };

  const infiniteScroll = () => {
    const scrollHeight = document.getElementById("list").scrollHeight;
    const scrollTop = document.getElementById("list").scrollTop;
    const clientHeight = document.getElementById("list").clientHeight;
    if (scrollTop + clientHeight === scrollHeight) {
      if (toTalPage == page) {
        WarningToast("마지막 페이지입니다.");
        return 0;
      } else {
        scrollPage();
      }
    }
  };

  return (
    <div className="background-public">
      <PageTemplate>
        <CategoryHedaer category={category} onSearch={getSearch} />
        {isDefault ? (
          <ListDefault />
        ) : (
          <div className="list-container" id="list" onScroll={infiniteScroll}>
            <ListItem list={listData} />
          </div>
        )}
      </PageTemplate>
    </div>
  );
};

export default React.memo(CategorySearchContainer);
