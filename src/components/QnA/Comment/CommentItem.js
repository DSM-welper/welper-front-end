import Image from "next/image";
import { welper_icon, delete_icon } from "../../../assets/img";

const CommentItem = () => {
  return (
    <div className="comment">
      <Image src={welper_icon} width={"45"} height={"45"} />
      <div className="comment-section">
        <div className="comment-header">
          <h4>어쩌구닉넴</h4>
          <div className="comment-info">
            <p>2020-10-01 00:04</p>
            <Image src={delete_icon} width={"14"} height={"14"} />
          </div>
        </div>

        <p className="comment-contents">ㅇㅇ 저 해봤어요</p>
      </div>
    </div>
  );
};

export default CommentItem;
