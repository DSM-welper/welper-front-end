import React from "react";
import Image from "next/image";
import "./FirstView.scss";
import { first_view_mock } from "../../assets/img";
import { Footer } from ".";

const FourthScreen = () => {
  return (
    <div className=" inner-container fourth-container">
      <div>
        <Image src={first_view_mock} alt="welper_mock" width={700} height={490}></Image>
        <h1 className="big-description">웰퍼를 통해 더 나은 세상을 만나보세요</h1>
        <p>웰퍼는 복지 정책 추천 서비스입니다. 다양한 정책과 큐앤에이를 통해 더 행복한 세상을 만들어보세요</p>
        <button className="main-button">시작하기</button>
        <Footer />
      </div>
    </div>
  );
};

export default FourthScreen;
