import Header from "../Header/Header";
import "./PageTemplate.scss";

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="page-template">{children}</div>
    </>
  );
};

export default PageTemplate;
