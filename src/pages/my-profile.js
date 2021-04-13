import Profile from "../components/Profile/Profile";
import { GetMyProfile } from "../lib/api/user";

const MyProfile = ({ data }) => {
  return <Profile data={data} />;
};

MyProfile.getInitialProps = async () => {
  const profileData = await (await GetMyProfile()).data;
  return {
    data: profileData,
  };
};

export default MyProfile;
