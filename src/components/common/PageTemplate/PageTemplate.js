import Header from "../Header/Header";
import "./PageTemplate.scss";

const PageTemplate = ({ children, handleSearch }) => {
  return (
    <>
      <Header handleSearch={handleSearch}></Header>
      <div className="page-template">{children}</div>
    </>
  );
};

export default PageTemplate;
