import PageTemplate from "../common/PageTemplate/PageTemplate";
import "./Profile.scss";
import Router from "next/router";

const MyPage = ({ data }) => {
  const detailView = (id) => {
    Router.push({
      pathname: "/welper-detail",
      query: { id },
    });
  };

  return (
    <div className="background-public">
      <PageTemplate>
        <div className="profile-container">
          <div className="profile-header">마이페이지</div>
          <h4>해린 님의 북마크 목록입니다.</h4>
          <div className="my-list-box">
            {data.bookMark.map((item, key) => (
              <div
                className="list"
                key={key}
                onClick={() => detailView(item.servId)}
              >
                <span>{item.servNm}</span>
                <p>{item.servDgst.substring(0, 80)}</p>
              </div>
            ))}
          </div>
        </div>
      </PageTemplate>
    </div>
  );
};

export default MyPage;
