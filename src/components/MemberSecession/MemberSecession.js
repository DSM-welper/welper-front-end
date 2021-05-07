import AuthPageTemplate from "../common/AuthPageTemplate/AuthPageTemplate";
import "../Login/Login.scss";
import { lock } from "../../assets/img";
import Link from "next/link";
import Image from "next/image";

const MemberSecession = () => {
  return (
    <AuthPageTemplate secession={true}>
      <div className="auth-container">
        <h1>MEMBER SECESSION</h1>
        <p className="auth-container-description">회원가입 시 입력했던 비밀번호를 입력하세요</p>
        <div className="auth-container-input">
          <label>
            Password
            <div className="auth-input">
              <Image src={lock} width={20} height={25} />
              <input placeholder="비밀번호를 입력하세요" type="password" name="password" />
            </div>
          </label>
          <Link href="/">
            <p className="auth-container-link">
              탈퇴를 <strong>취소하시겠습니까?</strong>
            </p>
          </Link>
        </div>
        <button className="auth-container-button">탈퇴하기</button>
      </div>
    </AuthPageTemplate>
  );
};

export default MemberSecession;
