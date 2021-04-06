import React from "react";
import Image from "next/image";
import Link from "next/link";
import { question_circle, first_user_icon } from "../../assets/img";

const FeatureItem = ({ name, description }) => {
  return (
    <div className="recommend-item-box feature">
      <Image src={name === "프로필 변경" ? first_user_icon : question_circle} alt="icon" width={26} height={24}></Image>
      <h2>{name}</h2>
      <p className="description-text">{description}</p>
      <Link href={name === "프로필 변경" ? "/profile-setting" : "/qna"}>
        <button className="main-button">이동하기</button>
      </Link>
    </div>
  );
};

export default FeatureItem;
