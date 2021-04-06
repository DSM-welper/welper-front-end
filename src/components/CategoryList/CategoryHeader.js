import React, { useState, useEffect } from "react";
import "./Category.scss";

const CategoryHeader = (props) => {
  let [data, setData] = useState([]);
  let [category, setCategory] = useState([]);
  let [isData, setIsData] = useState(false);

  const categoryData = () => {
    let lifeType = document.getElementById("life");
    let type = document.getElementById("type");
    let characteristic = document.getElementById("characteristic");
    let obstacle = document.getElementById("obstacle");
    let desire = document.getElementById("desire");

    setData([
      ...data,
      lifeType.options[lifeType.selectedIndex].value,
      type.options[type.selectedIndex].value,
      characteristic.options[characteristic.selectedIndex].value,
      obstacle.options[obstacle.selectedIndex].value,
      desire.options[desire.selectedIndex].value,
    ]);
    setCategory([
      ...category,
      lifeType.options[lifeType.selectedIndex].text,
      type.options[type.selectedIndex].text,
      characteristic.options[characteristic.selectedIndex].text,
      obstacle.options[obstacle.selectedIndex].text,
      desire.options[desire.selectedIndex].text,
    ]);
    setIsData(true);
  };

  useEffect(() => {
    props.category(data);
    if (isData) {
      setData([]);
      setIsData(false);
    }
  }, [isData]);

  return (
    <>
      <div className="category-container">
        <select className="select-box" id="life">
          <option value="NONE">생애주기</option>
          <option value="INFANTS">영유아</option>
          <option value="CHILD">아동</option>
          <option value="TEENAGE">청소년</option>
          <option value="YOUTH">청년</option>
          <option value="MIDDLEAGE">중장년</option>
          <option value="OLDAGE">노년</option>
        </select>
        <select className="select-box" id="type">
          <option value="NONE">가구 유형</option>
          <option value="SINGLEPARENTS">한부모</option>
          <option value="MULTICULTURE">다문화</option>
          <option value="GRANDCHILDREN">조손</option>
          <option value="SETTERMIN">새터민</option>
          <option value="CHILDHEAD">소년소녀가장</option>
          <option value="SOLOOLD">독거노인</option>
        </select>
        <select className="select-box" id="characteristic">
          <option value="NONE">대상 특성</option>
          <option value="WOMEN">여성</option>
          <option value="PREGNENT">임산부</option>
          <option value="DISORDER">장애인</option>
          <option value="NATIONALMERIT">국가유공자</option>
          <option value="UNEMPLOYED">실업자</option>
        </select>
        <select className="select-box" id="obstacle">
          <option value="NONE">장애</option>
          <option value="SERVE">심한</option>
          <option value="WEAK">약한</option>
        </select>
        <select className="select-box" id="desire">
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
        <button className="category-button" onClick={categoryData}>
          검색
        </button>
      </div>
    </>
  );
};
export default CategoryHeader;
