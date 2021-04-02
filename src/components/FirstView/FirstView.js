import "./FirstView.scss";
import { FirstScreen, SecondScreen, ThirdScreen, FourthScreen } from "./";

const FirstView = ({ list }) => {
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
