import { SignUpAuth } from "../../components";
import { useState } from "react";
import { useRouter } from "next/router";
import { AuthEmail } from "../../lib/api/user";
import { ErrorToast, SuccessToast, WarningToast } from "../../lib/toast";
import Router from "next/router";

const AuthContainer = () => {
  let [authData, setAuth] = useState({
    code: "",
    mail: "",
  });
  const router = useRouter();

  const AuthInput = (e) => {
    setAuth({
      ...authData,
      code: e.target.value,
      mail: router.query.email,
    });
  };
  const getAuth = () => {
    AuthEmail(authData.code, authData.mail)
      .then(() => {
        SuccessToast("정보를 입력하세요.");
        Router.push(`/sign-up/data?email=${authData.mail}`, "/");
      })
      .catch((err) => {
        switch (err.response.data.code) {
          case "AUTHENTICATION_NUMBER_MISMATCH":
            ErrorToast("인증번호가 올바르지 않습니다.");
            break;
          case "INVALID_REQUEST_BODY":
            WarningToast("입력 칸이 비어있습니다.");
        }
        console.log(err.response.data.code);
      });
  };
  return <SignUpAuth AuthInput={AuthInput} getAuth={getAuth} />;
};

export default AuthContainer;
