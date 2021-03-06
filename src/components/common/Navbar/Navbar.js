import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.scss";
import { qna_mock, home, pencil, laptop, arrow_out } from "../../../assets/img";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import { SuccessToast } from "../../../lib/toast";

const Navbar = () => {
  const router = useRouter();
  const nav = [
    {
      name: "메인으로",
      img: home,
      link: "/",
      width: 25,
      height: 21,
    },
    {
      name: "프로필 설정",
      img: pencil,
      link: "/my-profile",
      width: 23,
      height: 21,
    },
    {
      name: "복지 확인하기",
      img: laptop,
      link: "/category-list",
      width: 24,
      height: 12,
    },
    {
      name: "로그아웃",
      img: arrow_out,
      link: "/qna",
      width: 23,
      height: 8,
      function: () => {
        cookie.remove("accessToken");
        cookie.remove("refreshToken");
        router.push("/");
        SuccessToast("로그아웃 되었습니다.");
      },
    },
  ];
  return (
    <>
      <div className="nav-container">
        <div>
          <img className="nav-container-image" src={qna_mock} alt="qna_mock" />
          <nav className="nav">
            <div className="nav-inner">
              {nav.map((n, index) => {
                return (
                  <Link href={n.link} key={index} className="nav-link">
                    <div className="nav-box" onClick={n.function ? n.function : null}>
                      <Image src={n.img} width={n.width} height={n.height} />
                      <h5>{n.name}</h5>
                    </div>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
