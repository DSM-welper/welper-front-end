import Image from "next/image";
import { welper_icon, delete_icon } from "../../../assets/img";

const CommentItem = ({ contents, writer }) => {
  return (
    <div className="comment">
      <Image src={welper_icon} width={"45"} height={"45"} />
      <div className="comment-section">
        <div className="comment-header">
          <h4>{writer ? writer : null}</h4>
          <div className="comment-info">
            <p>2020-10-01 00:04</p>
            <Image src={delete_icon} width={"14"} height={"14"} />
          </div>
        </div>

        <p className="comment-contents">{contents ? contents : null}</p>
      </div>
    </div>
  );
};

export default CommentItem;
