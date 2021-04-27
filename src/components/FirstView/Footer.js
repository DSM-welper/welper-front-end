import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./FirstView.scss";
import { welper_logo, github } from "../../assets/img";

const Footer = () => {
  return (
    <footer className="footer">
      <article>
        <Image src={welper_logo} alt="welper_logo" width={59} height={33}></Image>
        <p>
          웰퍼는 당신에게 맞는 복지를 추천해주는 <br />
          복지 정책 추천 서비스입니다.
          <br />
          어디서든 당신을 도와줄 손길을 확인해보세요
        </p>
      </article>
      <article className="name-wrapper">
        <div className="footer-box">
          <h4>Frontend</h4>
          <p>김해린</p>
          <p>신서림</p>
        </div>
        <div className="footer-box">
          <h4>Backend</h4>
          <p>안영준</p>
        </div>
        <div className="footer-box">
          <h4>Design</h4>
          <p>신서림</p>
        </div>
        <Link href="https://github.com/DSM-welper/welper-front-end">
          <a>
            <img src={github} alt="welper_logo" width={47} height={47}></img>
          </a>
        </Link>
      </article>
    </footer>
  );
};

export default Footer;
