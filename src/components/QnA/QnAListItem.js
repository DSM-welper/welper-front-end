import React from "react";
import Image from "next/image";
import Link from "next/link";
import { question_white, delete_icon } from "../../assets/img";
import { confirmAlert } from "../../lib/sweetAlert";

const QnAListItem = ({ title, writer, date, id, onDeletePost }) => {
  const onRemovePost = () => {
    confirmAlert(title, "해당 글을 삭제하시겠습니까?", "warning", () => onDeletePost(id));
  };
  return (
    <>
      <Link href={`/qna/${id}`}>
        <div className="qna-list">
          <div className="qna-list-item">
            <div>
              <Image src={question_white} width={28} height={28} />
              <h2>{title}</h2>
            </div>
            <p>{writer}</p>
            <div>
              <p>{date}</p>
              <Image src={delete_icon} width={15} height={15} onClick={onRemovePost} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default QnAListItem;
