import React, { useEffect, useState } from "react";
import "./Header.scss";
import { welper_logo, welper_icon, triangle } from "../../../assets/img";
import Searchbar from "../Searchbar/Searchbar";
import Router from "next/router";
import cookie from "js-cookie";
import { SuccessToast } from "../../../lib/toast";
import { GetMyProfile } from "../../../lib/api/user";

const Header = ({ handleSearch }) => {
  let [name, setName] = useState("");
  const logout = () => {
    SuccessToast("이용해 주셔서 감사합니다. \n 로그아웃 되셨습니다.");
    setTimeout(() => {
      cookie.remove("accessToken");
      Router.push("/login");
    }, 2000);
  };
  useEffect(() => {
    onMenu();
    GetMyProfile().then((res) => {
      setName(res.data.name);
    });
  }, []);

  const onMenu = () => {
    const menu = document.getElementsByClassName("menu")[0];
    if (menu.style.display == "none") menu.style.display = "flex";
    else menu.style.display = "none";
  };
  return (
    <div className="header-container">
      <img
        src={welper_logo}
        className="logo"
        onClick={() => Router.push("/")}
      />

      <div className="search-container">
        <Searchbar handleSearch={handleSearch} />
        <div className="header-profile">
          <img src={welper_icon} />
        </div>
        <img src={triangle} className="menu-img" onClick={onMenu} />
        <div className="menu">
          <img src={welper_icon} id="img-menu" />
          <h5>{name}</h5>
          <h5 onClick={() => Router.push("/my-profile")}>프로필 설정</h5>
          <h6 onClick={logout}>로그아웃</h6>
        </div>
      </div>
    </div>
  );
};

export default Header;
