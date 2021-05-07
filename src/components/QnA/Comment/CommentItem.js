import Image from "next/image";
import { welper_icon, delete_icon } from "../../../assets/img";
import { confirmAlert } from "../../../lib/sweetAlert";

const CommentItem = ({ id, contents, writer, date, onDeleteComment }) => {
  const onRemoveComment = () => {
    confirmAlert(contents, "해당 댓글을 삭제하시겠습니까?", "warning", () => onDeleteComment(id));
  };
  return (
    <div className="comment">
      <Image src={welper_icon} alt="welper-circle-icon" width={"45"} height={"45"} />
      <div className="comment-section">
        <div className="comment-header">
          <h4>{writer ? writer : null}</h4>
          <div className="comment-info">
            <p>{date}</p>
            <img src={delete_icon} alt="delete-icon" width={"14"} height={"14"} onClick={onRemoveComment} />
          </div>
        </div>

        <p className="comment-contents">{contents ? contents : null}</p>
      </div>
    </div>
  );
};

export default CommentItem;
