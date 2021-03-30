import Header from "../Header/Header";

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="page-template">{children}</div>
    </>
  );
};

export default PageTemplate;
