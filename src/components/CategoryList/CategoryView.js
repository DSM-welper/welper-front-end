import CategoryHeader from "./CategoryHeader";
import "./Category.scss";
import PageTemplate from "../common/PageTemplate/PageTemplate";
import ListItem from "./ListItem";

const CategoryView = () => {
  return (
    <div className="background-public">
      <PageTemplate>
        <CategoryHeader />
        <ListItem />
      </PageTemplate>
    </div>
  );
};

export default CategoryView;
