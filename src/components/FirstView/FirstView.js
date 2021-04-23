import { useEffect } from "react";
import "./FirstView.scss";
import { FirstScreen, SecondScreen, ThirdScreen, FourthScreen } from "./";
import { WarningToast } from "../../lib/toast";
import cookie from "js-cookie";
import client from "../../lib/api/client";
import { refreshToken } from "../../lib/api/user";
import { useRouter } from "next/router";

const FirstView = ({ list }) => {
  const router = useRouter();
  useEffect(() => {
    if (list === "INVALID_TOKEN") {
      const retoken = cookie.get("refreshToken");
      client.defaults.headers.common["refreshToken"] = retoken;
      refreshToken()
        .then((res) => {
          cookie.remove("accessToken");
          cookie.set("accessToken", res.accessToken, { expires: 1800000 });
        })
        .catch(() => {
          WarningToast("오류가 발생하였습니다. 로그인 해주세요.");
          router.push("/login");
        });
    }
  }, []);
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
