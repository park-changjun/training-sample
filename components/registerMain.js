import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import Link from "next/link";
import InputBox from "../components/inputBox";
import InputCheckbox from "../components/inputCheckbox";
import Button from "../components/button";
// import postcss from "postcss";
import CheckBox from './checkBox';



const RegisterMain = () => {
  const buttonRef = React.useRef();
  const [posts, setPosts] = React.useState([]);
  const [inputName, setInputName] = React.useState("");
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPw, setInputPw] = React.useState("");
  const [checkPw, setCheckPw] = React.useState("");
  const [inputNum, setInputNum] = React.useState("");
  const [checkBox, setCheckBox] = React.useState(false);
  const [unChecked, setUnChecked] = React.useState(false);
  

  // React.useEffect(() => {
  //     axios({ url: "http://localhost:8100/api/posts", method: "GET" }).then(
  //         ({ data }) => setPosts(data)
  //     );
  // }, []);
  //axios를 안에 작성하면 비동기가 안됨
  //같은 방식이다. >  axios({ url: "http://localhost:8100/api/posts", method: "GET" }).then((res) => setPosts(res)).catch((e) => console.log(e));

  React.useEffect(() => {
    funcCall(); //함수 호출
  }, []);

  //함수 하나 따로 선언해서 async사용
  const funcCall = async () => {
    const res = await axios({
      url: "http://localhost:8100/api/posts",
      method: "GET",
    });
    setPosts(res.data);
  };



  const onChangeCheckBox = (e) => {
    setCheckBox(false);
    setCheckboxData(e.target.value);
  }


  const [checkboxData, setCheckboxData] = React.useState([
    {
      id: 1,
      text:'이용약관 동의',
      active: false,
      essential: false
    },
    {
      id: 2,
      text:'개인정보수집 및 이용 동의',
      active: false,
      essential: false
    },
    {
      id: 3,
      text: '이벤트 및 정보 수신 동의',
      active: false,
      essential: true
    }
  ]);


  return (
    <main className="mainWrap">
      <div className="mainContainer">
        <div className="registerContainer">
          <div className="register">
            <p>간편회원가입</p>

            <div className="registerData name">
              <polyline>이름</polyline>
              <input
                className="inputbox"
                type="text"
                placeholder="이름을 입력하세요"
                value={inputName}
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
              />
            </div>

            <div className="registerData email">
              <p>이메일</p>
              <div>
                <input
                  className="inputbox"
                  type="text"
                  placeholder="이메일을 입력하세요"
                  value={inputEmail}
                  onChange={(e) => {
                    setInputEmail(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      buttonRef.current?.click();
                    }
                  }}
                />
                <button
                  className="checkBtn"
                  onClick={() => {
                    posts.map((post) => {
                      if (inputEmail === post.email) {
                        alert(
                          "등록된 이메일입니다. 다른이메일을 입력하세요."
                        );
                      }
                    });

                      if (inputEmail === '') {
                        alert('이메일을 입력해주세요.');
                      } else {
                        alert('사용 가능한 이메일입니다.');
                      }
                    
                  }}
                  ref={buttonRef}
                >
                  중복확인
                </button>
              </div>
            </div>

            <div className="registerData password">
              <p>비밀번호</p>
              <input
                className="inputbox"
                id="noMargin"
                type="password"
                placeholder="비밀번호를 입력하세요. (8~20자 이내의 영문과 숫자 조합)"
                value={inputPw}
                onChange={(e) => {
                  setInputPw(e.target.value);
                }}
              //정규식 젤 마지막에 하기
              />
              <input
                className="inputbox"
                type="password"
                placeholder="비밀번호를 확인해주세요."
                value={checkPw}
                onChange={(e) => {
                setCheckPw(e.target.value);
                }}
                // onChange={onChangePwCheck}
                onBlur={() => { //해당 위치를 벗어났을 때
                  checkPw !== inputPw
                    ? alert("비밀번호가 일치하지 않습니다.")
                    : checkPw;
                }}
              />
            </div>
            <div className="registerData number">
              <p>휴대폰 번호</p>
              <input
                className="inputbox"
                type="number"
                placeholder="휴대폰번호를 입력하세요. (숫자만 입력)"
                value={inputNum}
                onChange={(e) => {
                  setInputNum(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key >= 0 && e.key <= 9) {
                    return true;
                  }
                }}
              />
            </div>

            <div className="registerCheck">


              <div>
                <input
                  className="CheckboxR"
                  type="checkbox"
                  // checked="checked"
                  onChange={onChangeCheckBox}
                />
                <p>[필수] 이용약관 동의</p>
                </div>
              <div>
                <input
                  className="CheckboxR"
                  type="checkbox"
                  // checked="checked"
                  onChange={onChangeCheckBox}
                />
                <p>[필수] 개인정보수집 및 이용 동의</p>
              </div>
              <div>
                <input
                  className="CheckboxR"
                  type="checkbox"
                />
                <p>[선택] 이벤트 및 정보 수신 동의</p>
              </div>
            </div>

            

            <button
              className="registerBtn"
              onChange={(e) => {
                e.preventDefault();
              }}


              onClick={() => {
                if (inputName == "" || inputName == null) {
                  alert("이름을 입력하세요");
                  return false;
                }
                if (inputEmail == "" || inputEmail == null) {
                  alert("이메일을 입력하세요");
                  return false;
                }
                if (inputPw == "" || inputPw == null) {
                  alert("비밀번호를 입력하세요");
                  return false;
                }
                if (inputNum == "" || inputNum == null) {
                  alert("휴대폰 번호를 입력하세요");
                  return false;
                } //공백체크

                if (inputPw !== checkPw) {
                  return alert('비밀번호가 일치하지 않습니다.');
                }
                else if (checkboxData[0].active === false || checkboxData[1].active === false) {
                  alert('필수 항목을 체크하세요.')
                }
                  // 체크값을 하나만

                else {
                  axios({
                    url: 'http://localhost:8100/api/posts',
                    method: 'POST',
                  })
                  .then(() => {
                    alert(`회원가입을 축하합니다!`);
                  });
                }
              }}
            >
              <p>가입하기</p>
            </button>
          </div>
        </div>
      </div>

      <div className="sideIcon"></div>
    </main>
  );
};

export default RegisterMain;
