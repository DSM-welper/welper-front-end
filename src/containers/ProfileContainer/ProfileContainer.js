import Profile from "../../components/Profile/Profile";
import { EditProfile } from "../../lib/api/user";
import cookie from "js-cookie";
import client from "../../lib/api/client";
import { SuccessToast } from "../../lib/toast";

const ProfileContainer = ({ data }) => {
  const editProfile = (marry, gender, disorder, age, name) => {
    const token = cookie.get("accessToken");
    token
      ? (client.defaults.headers.common["Authorization"] = token)
      : router.push("/login");
    EditProfile(marry, gender, disorder, age, name).then((res) => {
      if (res.status === 200)
        SuccessToast("프로필이 변경 되었습니다.", {
          position: "top-left",
          autoClose: 2000,
        });
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    });
  };

  return <Profile data={data} edit={editProfile} />;
};

export default ProfileContainer;
