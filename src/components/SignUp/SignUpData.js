import "./Data.scss";
import AuthPageTemplate from "../common/AuthPageTemplate/AuthPageTemplate";
import Router from "next/router";

const SignUpData = ({ inputData, selectData, getSignUp }) => {
  return (
    <AuthPageTemplate>
      <div className="data-container">
        <h1>SIGN UP</h1>
        <p>정보를 입력하여 자신에게 필요한 복지 정책을 만나보세요.</p>
        <div className="data-input-box">
          <div className="top-box">
            <div>
              <h4>Name</h4>
              <input
                placeholder="이름을 입력하세요"
                onChange={inputData}
                name="name"
                autoComplete="no"
              />
            </div>
            <div>
              <h4 id="age">Age</h4>
              <input
                placeholder="나이를 입력하세요"
                onChange={inputData}
                name="age"
              />
            </div>
          </div>
          <h4>Password</h4>
          <input
            id="pwd"
            name="password"
            placeholder="비밀번호를 입력하세요."
            onChange={inputData}
            type="password"
          />
          <div className="second-box">
            <h4>Type of obstacle</h4>
            <div className="first-arrow"></div>
            <select className="obstacle" onChange={selectData} id="disorder">
              <option>장애 여부를 선택해 주세요.</option>
              <option value="false">없음</option>
              <option value="true">있음</option>
            </select>
          </div>

          <div className="bottom-container">
            <div className="bottom-box">
              <h4>Marital Status</h4>
              <div className="bottom-arrow"></div>
              <select className="bottom-marry" id="marry" onChange={selectData}>
                <option>결혼 여부를 선택해 주세요.</option>
                <option value="SECRET">비공개</option>
                <option value="DONOT">미혼</option>
                <option value="DO">기혼</option>
              </select>
            </div>
            <div className="bottom-box">
              <h4 id="title-gender">Gender</h4>
              <div className="bottom-arrow"></div>
              <select
                className="bottom-gender"
                id="gender"
                onChange={selectData}
              >
                <option>성별을 선택해 주세요.</option>
                <option value="SECRET">비공개</option>
                <option value="WOMEN">여자</option>
                <option value="MEN">남자</option>
              </select>
            </div>
          </div>
          <a onClick={() => Router.push("/login")}>이미 계정이 있으신가요?</a>
        </div>

        <button onClick={getSignUp}>회원가입</button>
      </div>
    </AuthPageTemplate>
  );
};

export default SignUpData;
