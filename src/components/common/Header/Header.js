import React from "react";
import "./Header.scss";
<<<<<<< HEAD
import { welper_logo, search, user_color, triangle } from "../../../assets/img";

const Header = () => {
=======
import { welper_logo, welper_icon, triangle } from "../../../assets/img";
import Searchbar from "../Searchbar/Searchbar";
const Header = ({ handleSearch }) => {
>>>>>>> develop
  return (
    <div className="header-container">
      <img src={welper_logo} className="logo" />

      <div className="search-container">
        <Searchbar handleSearch={handleSearch} />
        <div className="header-profile">
<<<<<<< HEAD
          <img />
=======
          <img src={welper_icon} />
>>>>>>> develop
        </div>
        <img src={triangle} className="menu-img" />
      </div>
    </div>
  );
};

export default Header;
