import React, { useState } from "react";
import Login from "../../components/Login/Login";
import { login } from "../../lib/api/user";
import { ErrorToast, SuccessToast } from "../../lib/toast";

const LoginContainer = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const onChangeLoginInput = (e) => {
    const { value, name } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmitLogin = () => {
    login(loginData)
      .then(() => {
        SuccessToast("로그인 성공. 환영합니다!");
      })
      .catch(() => {
        ErrorToast("로그인에 실패했습니다. 다시 시도하세요.");
      });
  };
  return (
    <>
      <Login onSubmitLogin={onSubmitLogin} onChangeLoginInput={onChangeLoginInput} />
    </>
  );
};

export default LoginContainer;
