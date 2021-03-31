import React from "react";
import "./Category.scss";

const CategoryHeader = () => {
  const onSearch = () => {};
  return (
    <>
      <div className="category-container">
        <select className="select-box">
          <option value="">생애주기</option>
          <option value="영유아">영유아</option>
          <option>아동</option>
          <option>청소년</option>
          <option>청년</option>
          <option>중장년</option>
          <option>노년</option>
        </select>
        <select className="select-box">
          <option value="">가구 유형</option>
          <option>한부모</option>
          <option>다문화</option>
          <option>저소득층</option>
        </select>
        <select className="select-box">
          <option value="">대상 특성</option>
          <option>해당없음</option>
          <option>여성</option>
          <option>임산부</option>
          <option>장애인</option>
          <option>국가유공자</option>
          <option>실업자</option>
        </select>
        <select className="select-box">
          <option value="">장애</option>
          <option>심한</option>
          <option>약한</option>
        </select>
        <select className="select-box">
          <option value="">욕구</option>
          <option>안전</option>
          <option>건강</option>
          <option>일상생활 유지</option>
          <option>가족 관계</option>
          <option>사회적 관계</option>
          <option>경제</option>
          <option>교육</option>
          <option>고용</option>
          <option>생활 환경</option>
          <option>법</option>
          <option>기타</option>
        </select>
        <button className="category-button" onClick={onSearch}>
          검색
        </button>
      </div>
    </>
  );
};
export default CategoryHeader;
