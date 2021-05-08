import { MemberSecession } from "../../components";
import { secession } from "../../lib/api/user";
import { SuccessToast, ErrorToast } from "../../lib/toast";
import useChangeInput from "../../lib/hooks/useChangeInput";

const SecessionContainer = () => {
  const [password, setPassword] = useChangeInput({ password: "" });

  const onMemberSecession = () => {
    secession(password)
      .then(() => {
        SuccessToast("탈퇴가 완료되었습니다.");
      })
      .catch(() => {
        ErrorToast("탈퇴에 실패하였습니다. 다시 시도하세요.");
      });
  };

  return <MemberSecession setPassword={setPassword} onMemberSecession={onMemberSecession} />;
};

export default SecessionContainer;
