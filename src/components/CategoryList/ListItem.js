import "./Category.scss";
import { category_datail } from "../../assets/img";
import Router from "next/router";

const ListItem = ({ list }) => {
  const getDetail = (id) => {
    Router.push({
      pathname: "/welper-detail",
      query: { id },
    });
  };

  return (
    <>
      <h3 id="search"></h3>
      {list.map((item, i) => {
        return (
          <div
            className="list-box"
            onClick={() => getDetail(item.servId)}
            key={i}
          >
            <p>{item.servNm}</p>
            <div className="content-box">
              <span>{item.servDgst.substring(0, 120)}</span>
            </div>
            <img src={category_datail} onClick={() => getDetail(item.servId)} />
          </div>
        );
      })}
    </>
  );
};

export default ListItem;
