import React, { forwardRef } from "react";
import "./Category.scss";
import { category_datail } from "../../assets/img";
import Router from "next/router";

const ListItem = forwardRef((props, ref) => {
  const getDetail = (id) => {
    Router.push({
      pathname: "/welper-detail",
      query: { id },
    });
  };

  return (
    <>
      <h3 id="search"></h3>
      {props.list.map((item, idx) => (
        <React.Fragment key={idx}>
          {props.list.length - 1 == idx ? (
            <div
              className="list-box"
              onClick={() => getDetail(item.servId)}
              ref={ref}
            >
              <p>{item.servNm}</p>
              <div className="content-box">
                <span>{item.servDgst.substring(0, 120)}</span>
              </div>
              <img
                src={category_datail}
                onClick={() => getDetail(item.servId)}
              />
            </div>
          ) : (
            <div className="list-box" onClick={() => getDetail(item.servId)}>
              <p>{item.servNm}</p>
              <div className="content-box">
                <span>{item.servDgst.substring(0, 120)}</span>
              </div>
              <img
                src={category_datail}
                onClick={() => getDetail(item.servId)}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );
});

export default ListItem;
