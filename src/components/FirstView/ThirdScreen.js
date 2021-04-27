import React from "react";
import "./FirstView.scss";
import { FeatureItem } from ".";

const ThirdScreen = () => {
  const feature = [
    {
      name: "프로필 변경",
      description: "자신의 상황에 맞게 설정을 변경해보세요. 나이, 성별, 결혼여부 등에 따라 당신에게 맞는 복지 정책을 추천해드려요.",
    },
    {
      name: "Q&A",
      description: "먼저 겪어보고, 실행해본 사람들, 같은 고민을 하고 있는 사람들과 소통해보세요. 당신에게 도움이 될 거예요.",
    },
  ];
  return (
    <div className="third-container">
      <div className="inner-container">
        <section>
          <article>
            <h1>
              웰퍼에서 모두가 행복한
              <br /> 세상을 만나보세요
            </h1>
            <p>
              웰퍼는 당신에게 맞는 복지를 추천해주는 복지 정책 추천 서비스입니다.
              <br /> 더 나은 세상을 만들어 보세요.
            </p>
            <h4>맞춤형 복지정책 추천</h4>
            <p>
              회원가입 때 입력한 정보로 당신에게 맞는 복지정책을 추천해드려요.
              <br />
              뿐만 아니라 카테고리 별로 확인할 수 도 있어요.
            </p>
            <h4>프로필 설정</h4>
            <p>
              자신의 상황에 맞게 설정을 변경해보세요.
              <br />
              나이, 성별, 결혼여부 등에 따라 당신에게 맞는 복지 정책을 추천해드려요.
            </p>
            <h4>Q&A</h4>
            <p>
              먼저 겪어보고, 실행해본 사람들, 같은 고민을 하고 있는 사람들과 소통해보세요.
              <br />
              당신에게 도움이 될 거예요.
            </p>
          </article>
          <article className="item-box">
            {feature.map((f, index) => {
              return <FeatureItem key={index} name={f.name} description={f.description} />;
            })}
          </article>
        </section>
      </div>
    </div>
  );
};

export default ThirdScreen;
