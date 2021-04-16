import React from "react";
import Image from "next/image";
import { empty } from "../../assets/img";

const NotFound = ({errorText}) => {
  return (
    <div className="not-found-container">
      <Image src={empty} alt="404_error_page" width={440} height={370}></Image>
      <h1>NOT FOUND</h1>
      <p>{errorText}</p>
    </div>
  );
};

export default NotFound;
