import "./Profile.scss";
import PageTemplate from "../common/PageTemplate/PageTemplate";
import { profileImg } from "../../assets/img";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EditProfile } from "../../lib/api/user";
const Profile = ({ data }) => {
  let [isMa, setMarry] = useState("");
  let [gender, setGender] = useState("");
  let [edit, setEdit] = useState({
    marry: null,
    gender: null,
    disorder: true,
    age: 0,
    name: null,
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

  // useEffect(() => {
  //   console.log(edit);
  // }, [edit]);

  const profileEdit = () => {
    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender");
    let marry = document.getElementById("isMarry");
    let disorder = document.getElementById("disorder");
    let isDisorder = false;

    if (disorder.options[disorder.selectedIndex].value === "true")
      isDisorder = true;
    else isDisorder = false;

    if (disorder.options[disorder.selectedIndex].value === "null") {
      toast.warning("정보를 다 기입해 주세요.", { position: "top-right" });
    } else {
      EditProfile(
        marry.options[marry.selectedIndex].value,
        gender.options[gender.selectedIndex].value,
        isDisorder,
        age,
        name
      ).then((res) => {
        console.log(res.statusText);
      });
    }
  };

  return (
    <div className="background-public">
      <PageTemplate>
        <ToastContainer />
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
          <div className="input-box">
            <input className="profile-input" placeholder="나이" id="age" />
            <input className="profile-input" placeholder="이름" id="name" />
          </div>
          <div className="profile-option-box">
            <select className="profile-option" id="gender">
              <option value="null">성별</option>
              <option value="MEN">남자</option>
              <option value="WOMEN">여자</option>
              <option value="SECRET">비공개</option>
            </select>
            <select className="profile-option" id="isMarry">
              <option value="null">결혼 여부</option>
              <option value="DO">기혼</option>
              <option value="DONOT">미혼</option>
              <option value="SECRET">비공개</option>
            </select>
            <select className="profile-option" id="disorder" required>
              <option value="null">장애 여부</option>
              <option value={false}>없음</option>
              <option value={true}>있음</option>
            </select>
          </div>
          <button className="profile-button" onClick={profileEdit}>
            완료
          </button>
        </div>
      </PageTemplate>
    </div>
  );
};

export default Profile;
