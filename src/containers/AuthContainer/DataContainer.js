import { SignUpData } from "../../components";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { SignUp } from "../../lib/api/user";
import { ErrorToast, SuccessToast } from "../../lib/toast";

const DataContainer = () => {
  let [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    marry: "",
    gender: "",
    disorder: "",
  });
  const router = useRouter();

  useEffect(() => {
    setData({ ...data, email: router.query.email });
  }, []);

  const inputData = (e) => {
    const { value, name } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const selectData = (e) => {
    const { value, id } = e.target;
    setData((data) => ({ ...data, [id]: value }));
  };
  const getSignUp = () => {
    SignUp(data)
      .then((res) => {
        SuccessToast("회원가입이 완료 되었습니다.");
        Router.push("/login");
      })
      .catch((err) => {
        ErrorToast("비어있는 칸이 있습니다.");
      });
  };
  return (
    <SignUpData
      inputData={inputData}
      selectData={selectData}
      getSignUp={getSignUp}
    />
  );
};

export default DataContainer;
