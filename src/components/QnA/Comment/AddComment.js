import Image from "next/image";
import { welper_icon } from "../../../assets/img";

const AddComment = ({ onSubmitComment, onChangeComments }) => {
  return (
    <div className="add-comment">
      <Image src={welper_icon} width={"55"} height={"55"} />
      <input placeholder="댓글을 입력하세요" name="contents" onChange={onChangeComments} />
      <button onClick={onSubmitComment}>등록</button>
    </div>
  );
};

export default AddComment;
