import React from "react";
import Image from "next/image";
import Link from "next/link";
import { question_white, deleteIcon } from "../../assets/img";

const QnAListItem = ({ title, writer, date, id }) => {
  return (
    <Link href={`/qna/[${id}]`}>
      <div className="qna-list">
        <div className="qna-list-item">
          <div>
            <Image src={question_white} width={28} height={28} />
            <h2>{title}</h2>
          </div>
          <p>{writer}</p>
          <div>
            <p>
              {date[0]}.{date[1]}.{date[2]}
            </p>
            <Image src={deleteIcon} width={15} height={15} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QnAListItem;
