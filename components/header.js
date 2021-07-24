import React from 'react'
import Link from "next/link";

const Header = () => {
    return (
        <header className="headerWrap">
        <div className="headerTop">
          <div className="headerTopContainer">
            <div className="logoText">
              <p>도시 속 문화 충전소,문화로운생활</p>
            </div>
            <div className="navTop">
              <button className="headerLoginBtn">
                <Link href="/register">
                  <a>회원가입</a>
                </Link>
              </button>

              <button className="headerRegisterBtn">
                <Link href="/login">
                  <a>로그인</a>
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="headerBottom">
          <div className="headerBottomContainer">
            <div className="logo"></div>
            <div className="navBottom">
              <ul>
                <li>
                  <a href="#">문화로운생활</a>
                </li>
                <li>
                  <a href="#">모임</a>
                </li>
                <li>
                  <a href="#">공간대관</a>
                </li>
                <li>
                  <a href="#">오시는길</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header
