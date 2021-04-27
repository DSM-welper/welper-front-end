import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./FirstView.scss";
import { welper_logo, first_view2_mock } from "../../assets/img";

const FirstScreen = () => {
  return (
    <div className="first-container">
      <div className="inner-container">
        <div>
          <Image src={welper_logo} alt="welper_logo" width={140} height={70}></Image>
          <h1>
            WELCOME TO <br />
            WELPER
          </h1>
          <Image src={first_view2_mock} alt="first_view_mock" width={370} height={200}></Image>
          <p>웰퍼를 통해 더 나은 세상을 함께해보세요.</p>
          <Link href="/login">
            <button className="main-button">시작하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
