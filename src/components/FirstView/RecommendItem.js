import React from "react";
import Image from "next/image";
import { handshake } from "../../assets/img";
import Link from "next/link";

const RecommendItem = ({ id, title, description, category }) => {
  return (
    <>
      <Link href={`/welper-detail?id=${id}`}>
        <div className="recommend-item-box">
          <Image src={handshake} alt="handshake_icon" width={50} height={30}></Image>
          <h2>{title && title.length > 13 ? `${title.substr(0, 13)}...` : title}</h2>
          <p className="description-text">{description && description.length > 66 ? `${description.substr(0, 66)}...` : description}</p>
          <p>{category}</p>
        </div>
      </Link>
    </>
  );
};

export default RecommendItem;
