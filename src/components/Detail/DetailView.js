import PageTemplate from "../common/PageTemplate/PageTemplate";
import WelpareDetail from "./WelpareDetail";
import { useEffect } from "react";
const DetailView = ({ content }) => {
  return (
    <div className="background-public">
      <PageTemplate>
        <WelpareDetail data={content}></WelpareDetail>
      </PageTemplate>
    </div>
  );
};

export default DetailView;
