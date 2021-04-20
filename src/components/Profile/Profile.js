import "./Profile.scss";
import PageTemplate from "../common/PageTemplate/PageTemplate";
import { profileImg } from "../../assets/img";
import { useEffect, useState } from "react";
import { WarningToast } from "../../lib/toast";

const Profile = ({ data, edit }) => {
  let [isMa, setMarry] = useState("");
  let [gender, setGender] = useState("");
  let [editData, setEdit] = useState({
    marry: "",
    age: 0,
    name: "",
    disorder: false,
    gender: "",
  });

  useEffect(() => {
    switch (data.gender) {
      case "WOMEN":
        setGender("여자");
        break;
      case "MEN":
        setGender("남자");
        break;
      case "SECRET":
        setGender("비공개");
        break;
    }
    switch (data.marry) {
      case "DO":
        return setMarry("기혼");
      case "DONOT":
        return setMarry("미혼");
      case "SECRET":
        return setMarry("비공개");
    }
  }, []);
  const dataChange = (e) => {
    const { id, value } = e.target;
    setEdit({
      ...editData,
      [id]: value,
    });
  };
  const profileEdit = () => {
    if (editData.name == "") WarningToast("정보를 다 입력해 주세요. ");
    else {
      edit(editData);
    }
  };

  return (
    <div className="background-public">
      <PageTemplate>
        <div className="profile-container">
          <div className="profile-header">프로필 설정</div>
          <img src={profileImg} className="profile-img" />
          <p className="profile-introduce">
            <span style={{ color: "#802457", fontWeight: "bolder" }}>
              {data.name}
            </span>{" "}
            님은 현재{" "}
            <span style={{ color: "#802457", fontWeight: "bolder" }}>
              {data.age}세, {gender}, {isMa}
            </span>
            으로 설정되어 있습니다.
          </p>
          <div className="profile-input-box">
            <input placeholder="나이" id="age" onChange={dataChange} />
            <input placeholder="이름" id="name" onChange={dataChange} />
          </div>
          <div className="profile-option-box">
            <select
              className="profile-option"
              id="gender"
              onChange={dataChange}
            >
              <option value="null">성별</option>
              <option value="MEN">남자</option>
              <option value="WOMEN">여자</option>
              <option value="SECRET">비공개</option>
            </select>
            <select className="profile-option" id="marry" onChange={dataChange}>
              <option value="null">결혼 여부</option>
              <option value="DO">기혼</option>
              <option value="DONOT">미혼</option>
              <option value="SECRET">비공개</option>
            </select>
            <select
              className="profile-option"
              id="disorder"
              onChange={dataChange}
            >
              <option value="null">장애 여부</option>
              <option value={false}>없음</option>
              <option value={true}>있음</option>
            </select>
          </div>
          <button className="profile-button" onClick={profileEdit}>
            변경
          </button>
        </div>
      </PageTemplate>
    </div>
  );
};

export default Profile;
