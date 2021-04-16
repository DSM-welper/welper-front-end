import { welper_logo, auth_mock } from "../../../assets/img";
import "./AuthPageTemplate.scss";
const AuthPageTemplate = ({ children }) => {
  return (
    <div className="auth-background">
      <aside>
        <div>
          <img src={welper_logo} width={146} height={70} className="auth-logo" />
          <img src={auth_mock} />
          <h4>
            WEL<span>fare + hel</span>PER
          </h4>
          <p className="auth-description">웰퍼는 맞춤형 복지정책 제공 서비스입니다. 분석을 통해 나이, 성별, 결혼여부 등에 따른 당신에게 가장</p>
          <p className="auth-description">필요한 복지정책을 제공합니다. 지금 당장 시작해보세요.</p>
        </div>
      </aside>
      <section className="auth">{children}</section>
    </div>
  );
};

export default AuthPageTemplate;
