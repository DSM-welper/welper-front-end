import "./SignUp.scss";
import AuthPageTemplate from "../common/AuthPageTemplate/AuthPageTemplate";
import Router from "next/router";

const SignUpAuth = ({ AuthInput, getAuth }) => {
  return (
    <AuthPageTemplate>
      <div className="sign-container">
        <h1>SIGN UP</h1>
        <p>등록된 이메일 주소로 전송된 인증 코드를 입력하세요.</p>
        <div className="input-box">
          <h4>Code</h4>
          <input placeholder="인증 코드를 입력하세요" onChange={AuthInput} />
          <a onClick={() => Router.push("/login")}>이미 계정이 있으신가요?</a>
        </div>

        <button onClick={getAuth}>다음으로</button>
      </div>
    </AuthPageTemplate>
  );
};
export default SignUpAuth;
