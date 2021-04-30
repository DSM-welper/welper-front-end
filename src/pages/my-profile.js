import { GetMyProfile } from "../lib/api/user";
import ProfileContainer from "../containers/ProfileContainer/ProfileContainer";

const MyProfile = ({ data }) => {
  return <ProfileContainer data={data} />;
};

MyProfile.getInitialProps = async () => {
  const profileData = await (await GetMyProfile()).data;
  return {
    data: profileData,
  };
};

export default MyProfile;
