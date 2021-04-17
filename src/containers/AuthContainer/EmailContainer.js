import { SignUpEmail } from "../../components";
import Router from "next/router";
import { useState } from "react";
import { Email } from "../../lib/api/user";
import { WarningToast, ErrorToast, SuccessToast } from "../../lib/toast";

const EmailContainer = () => {
  let [email, setEmail] = useState("");
  const emailInput = (e) => {
    setEmail(e.target.value);
  };
  const getEmail = async () => {
    Email(email)
      .then(() => {
        SuccessToast("메일함을 확인하세요.");
        Router.push(`/sign-up/auth?email=${email}`, "/");
      })
      .catch((err) => {
        switch (err.response.data.code) {
          case "INVALID_REQUEST_BODY":
            ErrorToast("올바르지 않은 이메일입니다.");
            break;
          case "ALREADY_EXIST_ACCOUNT":
            WarningToast("이미 존재하는 이메일입니다.");
            break;
        }
      });
  };
  return <SignUpEmail emailInput={emailInput} getEmail={getEmail} />;
};

export default EmailContainer;
