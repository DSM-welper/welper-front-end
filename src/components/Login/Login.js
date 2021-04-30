import Image from "next/image";
import AuthPageTemplate from "../common/AuthPageTemplate/AuthPageTemplate";
import "./Login.scss";
import { email, lock } from "../../assets/img";
import Link from "next/link";

const Login = ({ onSubmitLogin, onChangeLoginInput }) => {
  return (
    <AuthPageTemplate>
      <div className="auth-container">
        <h1>WELCOME TO WELPER</h1>
        <p className="auth-container-description">지금 로그인 하여 더 나은 세상을 함께해보세요.</p>
        <div className="auth-container-input">
          <label>
            Email
            <div className="auth-input">
              <Image src={email} width={28} height={22} />
              <input placeholder="이메일을 입력하세요" name="email" onChange={onChangeLoginInput} />
            </div>
          </label>
        </div>
        <div className="auth-container-input">
          <label>
            Password
            <div className="auth-input">
              <Image src={lock} width={20} height={25} />
              <input placeholder="비밀번호를 입력하세요" type="password" name="password" onChange={onChangeLoginInput} />
            </div>
          </label>
          <Link href="sign-up/email">
            <p className="auth-container-link">
              아직 <strong>계정이 없으신가요?</strong>
            </p>
          </Link>
        </div>
        <button className="auth-container-button" onClick={onSubmitLogin}>
          LOGIN
        </button>
      </div>
    </AuthPageTemplate>
  );
};

export default Login;
