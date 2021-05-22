import React, { forwardRef, useEffect, useState } from "react";
import "./Category.scss";
import { category_datail, bookmark, bookmark_color } from "../../assets/img";
import Router from "next/router";
import { BookMark } from "../../lib/api/user";

const ListItem = forwardRef((props, ref) => {
  let markSrc;
  props.isBookMark ? (markSrc = bookmark_color) : (markSrc = bookmark);
  let [isMark, setMark] = useState(markSrc);

  const getDetail = (id) => {
    Router.push({
      pathname: "/welper-detail",
      query: { id },
    });
  };

  const bookMark = (id) => {
    if (props.isBookMark === false) {
      BookMark(id)
        .then((res) => {
          if (res.status === 200)
            alert("저장되었습니다. 마이페이지에서 확인하세요.");
          setMark(bookmark_color);
        })
        .catch((err) => {
          if (err.response.data.code == "INVALID_TOKEN")
            WarningToast("로그인 후에 사용 가능한 기능입니다. 로그인해 주세요");
        });
    }
  };

  return (
    <>
      <React.Fragment>
        {props.length - 1 == props.idx ? (
          <div className="list-box" ref={ref}>
            <p>{props.list.servNm}</p>
            <div className="content-box">
              <span>{props.list.servDgst.substring(0, 120)}</span>
            </div>
            <img
              src={category_datail}
              onClick={() => getDetail(props.list.servId)}
            />

            <img src={isMark} onClick={() => bookMark(props.list.servId)} />
          </div>
        ) : (
          <div className="list-box">
            <p>{props.list.servNm}</p>
            <div className="content-box">
              <span>{props.list.servDgst.substring(0, 120)}</span>
            </div>
            <img
              src={category_datail}
              onClick={() => getDetail(props.list.servId)}
            />

            <img src={isMark} onClick={() => bookMark(props.list.servId)} />
          </div>
        )}
      </React.Fragment>
    </>
  );
});

export default ListItem;
