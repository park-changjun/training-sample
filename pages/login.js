import React from "react";
import Link from "next/link";
import InputBox from "../components/inputBox";
import InputCheckbox from "../components/inputCheckbox";
import Button from "../components/button";

const Login = () => {
  return (
    <>
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
                  <a href="#">모암</a>
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

      <main className="mainWrap">
        <div className="mainContainer">
          <div className="loginContainer">
            <div className="login">
              <p>로그인</p>

              <InputBox />
              <InputBox />
              <InputCheckbox />

              <Button />


              <button className="simpleRegisterBtn">간편 회원가입</button>
              <button className="passwordBtn">비밀번호 재설정</button>
            </div>

            <div className="social">
              <hr className="hrLeft" />
              <p>간편 소셜 로그인</p>
              <hr className="hrRight" />
              <div className="socialIconBtn">
                <button></button>
                <button></button>
                <button></button>
              </div>
              <p>SNS계정으로 간편하게 가입하여 서비스 이용이 가능합니다.</p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
