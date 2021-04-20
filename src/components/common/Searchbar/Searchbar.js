import React, { useState } from "react";
import { useRouter } from "next/router";
import { search } from "../../../assets/img";
import { WarningToast } from "../../../lib/toast";

const Searchbar = ({ handleSearch }) => {
  const router = useRouter();
  const [content, setContent] = useState(router.query.id);
  return (
    <>
      <input placeholder="검색" onChange={(e) => setContent(e.target.value)} />
      <img
        src={search}
        onClick={() => {
          handleSearch();
          content
            ? router.push({
                pathname: `/search/${content}`,
                query: { page: 0 },
              })
            : WarningToast("검색어를 입력하세요");
        }}
      />
    </>
  );
};

export default Searchbar;
