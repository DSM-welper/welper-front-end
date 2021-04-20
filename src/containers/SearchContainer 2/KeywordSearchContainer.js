import React, { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";
import PageTemplate from "../../components/common/PageTemplate/PageTemplate";
import Search from "../../components/Search/Search";
import { WarningToast } from "../../lib/toast";

const KeywordSearchContainer = ({ list, keyword }) => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const prevPage = useCallback(() => {
    page <= 0 ? WarningToast("가장 최근 페이지입니다.") : setPage(page - 1);
  }, [page]);

  const nextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const handleSearch = useCallback(() => {
    setPage(0);
  }, [keyword]);

  useEffect(() => {
    console.log(keyword);
    router.push({
      pathname: `/search/${keyword}`,
      query: { page: page, content: keyword },
    });
  }, [page, keyword]);

  return (
    <PageTemplate handleSearch={handleSearch}>
      <Search list={list} prevPage={prevPage} nextPage={nextPage} page={page} />
    </PageTemplate>
  );
};

export default KeywordSearchContainer;
