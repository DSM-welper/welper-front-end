import React from "react";
import Image from "next/image";
import { empty } from "../../assets/img";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Image src={empty} alt="404_error_page" width={440} height={370}></Image>
      <h1>NOT FOUND</h1>
      <p>추천 목록을 불러오는 데에 실패했습니다. 다시 시도하세요.</p>
    </div>
  );
};

export default NotFound;
