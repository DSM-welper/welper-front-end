import "./Header.scss";
import { welper_logo, search, user_color, triangle } from "../../../assets/img";

const Header = () => {
  return (
    <div className="header-container">
      <img src={welper_logo} className="logo" />

      <div className="search-container">
        <input placeholder="검색" />
        <img src={search} />
        <div className="header-profile">
          <img />
        </div>
        <img src={triangle} className="menu-img" />
      </div>
    </div>
  );
};

export default Header;
