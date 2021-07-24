import React from "react";
import Link from "next/link";
import InputBox from "../components/inputBox";
import InputCheckbox from "../components/inputCheckbox";
import Button from "../components/button";
import axios from "axios";
import { useState, useEffect } from 'react';

const LoginMain = () => {
  const [posts, setPosts] = React.useState([]);
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPw, setInputPw] = React.useState("");
  const buttonRef = React.useRef();

  React.useEffect(() => {
    funcCall();
  }, []);

  const funcCall = async () => {
    const res = await axios({
      url: "http://localhost:8100/api/posts",
      method: "GET",
    });
    setPosts(res.data);
    // axios({ url: "http://localhost:8100/api/posts", method: "GET" }).then((res) => setPosts(res)).catch((e) => console.log(e));
  };

  //   console.log(posts);

  return (
    <main className="mainWrap">
      <div className="mainContainer">
        <div className="loginContainer">
          <div className="login">
            <p>로그인</p>

            <input
              className="inputbox"
              type="text"
              placeholder="이메일을 입력하세요"
              value={inputEmail}
              onChange={(e) => {
                setInputEmail(e.target.value);
              }}
            />
            <input
              className="inputbox"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={inputPw}
              onChange={(e) => {
                setInputPw(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  buttonRef.current?.click();
                }
              }}
            />
            <div>
              <input className="Checkbox" type="checkbox" />
              <p className="CheckboxText">로그인 상태유지</p>
            </div>

            <button
              className="loginBtn"
              onClick={() => {
                posts.map((post) => {
                  if(post?.email === inputEmail && post?.pw === inputPw){
                    alert("로그인되었습니다.");
                    
                  }
                });
                if ('' === inputEmail || '' === inputPw || post.email !== inputEmail || post.pw !== inputPw) {
                  alert('이메일과 비밀번호를 학인해주세요.');
                } 
              }} //수정하기

              ref={buttonRef}
            >
              <p>로그인</p>
            </button>
          </div>

          <div className="join">
            <button className="simpleRegisterBtn">
              <Link href="/register">
                <a>간편 회원가입</a>
              </Link>
            </button>
            <button className="passwordBtn">비밀번호 재설정</button>
          </div>

          <div className="social">
            <p>간편 소셜 로그인</p>
            <div className="socialIconBtn">
              <button className="naverIcon"></button>
              <button className="faceIcon"></button>
              <button className="kakaoIcon"></button>
            </div>
            <p className="btnText">
              SNS계정으로 간편하게 가입하여 서비스 이용이 가능합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="sideIcon"></div>
    </main>
  );
};

export default LoginMain;
