import { useEffect } from "react";
import "./FirstView.scss";
import { FirstScreen, SecondScreen, ThirdScreen, FourthScreen } from "./";
import { WarningToast } from "../../lib/toast";

const FirstView = ({ list }) => {
  useEffect(() => {
    if (list === "INVALID_TOKEN") {
      WarningToast("다시 로그인 해주세요.");
    }
  });
  return (
    <>
      <FirstScreen />
      <SecondScreen items={list} />
      <ThirdScreen />
      <FourthScreen />
    </>
  );
};

export default FirstView;
