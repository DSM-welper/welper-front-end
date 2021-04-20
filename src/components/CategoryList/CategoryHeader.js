import React, { useState, useEffect } from "react";
import "./Category.scss";
import { WarningToast } from "../../lib/toast";

const CategoryHeader = (props) => {
  let [data, setData] = useState([]);
  let [isData, setIsData] = useState(false);
  const dataChange = (e) => {
    setData([...data, e.target.value]);
  };
  const categoryData = () => {
    if (data.length === 0) WarningToast("카테고리를 선택해 주세요");
    else {
      props.category(data);
      setIsData(false);
    }
  };

  const categoryReset = () => {
    let lifeType = document.getElementById("life");
    let type = document.getElementById("type");
    let characteristic = document.getElementById("characteristic");
    let obstacle = document.getElementById("obstacle");
    let desire = document.getElementById("desire");
    lifeType.options[0].selected = true;
    type.options[0].selected = true;
    characteristic.options[0].selected = true;
    obstacle.options[0].selected = true;
    desire.options[0].selected = true;
    setData([]);
    setIsData(true);
  };
  useEffect(() => {
    props.category(data);
  }, [isData]);

  return (
    <>
      <div className="category-container">
        <select className="select-box" id="life" onChange={dataChange}>
          <option value="NONE">생애주기</option>
          <option value="INFANTS">영유아</option>
          <option value="CHILD">아동</option>
          <option value="TEENAGE">청소년</option>
          <option value="YOUTH">청년</option>
          <option value="MIDDLEAGE">중장년</option>
          <option value="OLDAGE">노년</option>
        </select>
        <select className="select-box" id="type" onChange={dataChange}>
          <option value="NONE">가구 유형</option>
          <option value="SINGLEPARENTS">한부모</option>
          <option value="MULTICULTURE">다문화</option>
          <option value="GRANDCHILDREN">조손</option>
          <option value="SETTERMIN">새터민</option>
          <option value="CHILDHEAD">소년소녀가장</option>
          <option value="SOLOOLD">독거노인</option>
        </select>
        <select
          className="select-box"
          id="characteristic"
          onChange={dataChange}
        >
          <option value="NONE">대상 특성</option>
          <option value="WOMEN">여성</option>
          <option value="PREGNENT">임산부</option>
          <option value="DISORDER">장애인</option>
          <option value="NATIONALMERIT">국가유공자</option>
          <option value="UNEMPLOYED">실업자</option>
        </select>
        <select className="select-box" id="obstacle" onChange={dataChange}>
          <option value="NONE">장애 정도</option>
          <option value="SERVE">심한</option>
          <option value="WEAK">약한</option>
        </select>
        <select className="select-box" id="desire" onChange={dataChange}>
          <option value="NONE">욕구</option>
          <option value="SAFETY">안전</option>
          <option value="HEALTH">건강</option>
          <option value="DAILYLIFE">일상생활 유지</option>
          <option value="FAMIlY">가족 관계</option>
          <option value="SOCIAL">사회적 관계</option>
          <option value="ECONOMIC">경제</option>
          <option value="EDUCATION">교육</option>
          <option value="EMPLOYMENT">고용</option>
          <option value="LIFE">생활 환경</option>
          <option value="LAW">법</option>
          <option value="ELSE">기타</option>
        </select>
        <div className="button-box">
          <button onClick={categoryReset} className="category-button">
            초기화
          </button>
          <button
            className="category-button"
            onClick={categoryData}
            data-tooltip-text="재검색은 초기화 버튼을 누른 후에 검색해 주세요."
          >
            검색
          </button>
        </div>
      </div>
    </>
  );
};
export default CategoryHeader;
