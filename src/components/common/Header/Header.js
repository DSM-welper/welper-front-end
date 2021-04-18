import React from "react";
import "./Header.scss";
import { welper_logo, welper_icon, triangle } from "../../../assets/img";
import Searchbar from "../Searchbar/Searchbar";
const Header = ({ handleSearch }) => {
  return (
    <div className="header-container">
      <img src={welper_logo} className="logo" />

      <div className="search-container">
        <Searchbar handleSearch={handleSearch} />
        <div className="header-profile">
          <img />
        </div>
        <img src={triangle} className="menu-img" />
      </div>
    </div>
  );
};

export default Header;
