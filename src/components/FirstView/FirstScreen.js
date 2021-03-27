import React from "react";
import Image from "next/image";
import "./FirstView.scss";
import { first_view_mock, a } from "../../assets/img";

const FirstScreen = () => {
  return (
    <div className="first-container">
      <Image src={a} alt="background" width={300} height={300}></Image>
      <Image src={first_view_mock} width={400} height={300}></Image>
    </div>
  );
};

export default FirstScreen;
