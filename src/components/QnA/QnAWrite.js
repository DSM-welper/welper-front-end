import { QnAPageTemplate } from "../common";
import "./QnA.scss";
import { useState } from "react";
import { CreateQnA } from "../../lib/api/qna";
import { SuccessToast, WarningToast } from "../../lib/toast";
import Router from "next/router";
const QnAWrite = () => {
  let [posts, setPosts] = useState({
    title: "",
    content: "",
    category: "",
  });
  const dataChange = (e) => {
    setPosts({
      ...posts,
      [e.target.name]: e.target.value,
    });
    if (e.target.name == "content") {
      document.getElementById("post-btn").style.backgroundColor = "#802457";
      document.getElementById("post-btn").style.cursor = "pointer";
    }
    if (e.target.name == "content" && e.target.value == "") {
      document.getElementById("post-btn").style.backgroundColor = "#7f245680";
      document.getElementById("post-btn").style.cursor = "";
    }
  };

  const getQna = () => {
    if (posts.title == "" || posts.category == "" || posts.content == "")
      WarningToast("비어있습니다. 올바르게 기입해 주세요.");
    else {
      CreateQnA(posts).then((res) => {
        if (res.status === 200) {
          SuccessToast("글이 등록 되었습니다.");
          setTimeout(() => {
            Router.push("/qna/mine");
          }, 3000);
        }
      });
    }
  };
  return (
    <QnAPageTemplate>
      <div className="qna-select-box">
        <select className="qna-category" onChange={dataChange} name="category">
          <option>카테고리 </option>
          <option value="INFANTS">영유아</option>
          <option value="CHILD">아동</option>
          <option value="TEENAGE">청소년</option>
          <option value="YOUTH">청년</option>
          <option value="MIDDLEAGE">중장년</option>
          <option value="OLDAGE">노년</option>
          <option value="SINGLEPARENTS">한부모</option>
          <option value="MULTICULTURE">다문화</option>
          <option value="GRANDCHILDREN">조손</option>
          <option value="SETTERMIN">새터민</option>
          <option value="CHILDHEAD">소년소녀가장</option>
          <option value="SOLOOLD">독거노인</option>
          <option value="WOMEN">여성</option>
          <option value="PREGNENT">임산부</option>
          <option value="DISORDER">장애인</option>
          <option value="NATIONALMERIT">국가유공자</option>
          <option value="UNEMPLOYED">실업자</option>
          <option value="SERVE">심한 장애</option>
          <option value="WEAK">약한 장애</option>
          <option value="SAFETY">안전</option>
          <option value="HEALTH">건강</option>
          <option value="DAILYLIFE">일상생활 유지</option>
          <option value="FAMIlY">가족관계</option>
          <option value="SOCIAL">사회적 관계</option>
          <option value="ECONOMIC">경제</option>
          <option value="EDUCATION">교육</option>
          <option value="EMPLOYMENT">고용</option>
          <option value="LIFE">생활 환경</option>
          <option value="LAW">법</option>
          <option value="ELSE">기타</option>
        </select>
      </div>
      <div className="qna-write">
        <input placeholder="제목" onChange={dataChange} name="title" />
        <textarea placeholder="내용" onChange={dataChange} name="content" />
      </div>
      <button id="post-btn" onClick={getQna}>
        등록하기
      </button>
    </QnAPageTemplate>
  );
};

export default QnAWrite;
