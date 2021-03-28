import React from "react";
import Image from "next/image";
import { handshake } from "../../assets/img";

const RecommendItem = () => {
  return (
    <div className="recommend-item-box">
      <Image src={handshake} alt="handshake_icon" width={50} height={30}></Image>
      <h2>어쩌구 복지정책</h2>
      <p className="description-text">
        이 정책은 한달에 어쩌구 두달동안 어쩌구를 하신분들에게 제공하는 어쩌구 이 정책은 한달에 어쩌구 두달동안 어쩌구를 하신분들에게 제공하는 어쩌구…
      </p>
      <p>청소년기</p>
    </div>
  );
};

export default RecommendItem;
