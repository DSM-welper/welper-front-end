import React, { useState } from "react";
import Login from "../../components/Login/Login";
import { login } from "../../lib/api/user";
import { ErrorToast, SuccessToast } from "../../lib/toast";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import useChangeInput from "../../lib/hooks/useChangeInput";

const LoginContainer = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useChangeInput({ email: "", password: "" });

  const onSubmitLogin = () => {
    login(loginData)
      .then((res) => {
        SuccessToast("로그인 성공. 환영합니다!");
        cookie.set("accessToken", res.accessToken, { expires: 1800000 });
        cookie.set("refreshToken", res.refreshToken, { expires: 1800000 });
        router.push("/");
      })
      .catch(() => {
        ErrorToast("로그인에 실패했습니다. 다시 시도하세요.");
      });
  };
  return (
    <>
      <Login onSubmitLogin={onSubmitLogin} onChangeLoginInput={setLoginData} />
    </>
  );
};

export default LoginContainer;
