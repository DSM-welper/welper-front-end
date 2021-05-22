import MyPageContainer from "../containers/ProfileContainer/MyPageContainer";
import { GetMyProfile } from "../lib/api/user";

const MyPage = ({ data }) => {
  return <MyPageContainer data={data} />;
};

MyPage.getInitialProps = async () => {
  const myPageData = await (await GetMyProfile()).data;
  return {
    data: myPageData,
  };
};
export default MyPage;
