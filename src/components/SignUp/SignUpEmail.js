import AuthPageTemplate from "../common/AuthPageTemplate/AuthPageTemplate";
import "./SignUp.scss";
import Router from "next/router";

const SignUpEmail = ({ emailInput, getEmail }) => {
  return (
    <AuthPageTemplate>
      <div className="sign-container">
        <h1>SIGN UP</h1>
        <p>지금 당장 회원가입 하여 더 나은 세상을 함께해 보세요.</p>
        <div className="input-box">
          <h4>Email</h4>
          <input placeholder="이메일을 입력하세요" onChange={emailInput} />
          <a onClick={() => Router.push("/login")}>이미 계정이 있으신가요?</a>
        </div>

        <button onClick={getEmail}>다음으로</button>
      </div>
    </AuthPageTemplate>
  );
};

export default SignUpEmail;
