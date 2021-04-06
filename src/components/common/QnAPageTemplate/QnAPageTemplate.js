import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./QnAPageTemplate.scss";
import { Navbar } from "../";
import { welper_logo, user_color, add_qna_color } from "../../../assets/img";

const QnAPageTemplate = ({ children }) => {
  const menu = [
    {
      name: "내가 쓴 글",
      img: user_color,
      width: 23,
      height: 23,
      link: "/my-qna",
    },
    {
      name: "글 쓰기",
      img: add_qna_color,
      width: 25,
      height: 25,
      link: "/add-qna",
    },
  ];
  return (
    <div className="qna">
      <Navbar />
      <section className="qna-section">
        <article className="qna-inner">
          <header className="qna-header">
            <Image src={welper_logo} width={45} height={25} />
            <article className="qna-article">
              {menu.map((m, index) => {
                return (
                  <Link href={m.link} key={index} className="nav-link">
                    <div className="qna-menu-box">
                      <Image src={m.img} width={m.width} height={m.height} />
                      <p>{m.name}</p>
                    </div>
                  </Link>
                );
              })}
            </article>
          </header>
          <h1 className="qna-h1">Q&A</h1>
          {children}
        </article>
      </section>
    </div>
  );
};

export default QnAPageTemplate;
