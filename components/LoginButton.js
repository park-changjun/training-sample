import React from 'react';
import axios from 'axios';

export default function LoginButton({
  children,
  email,
  password,
  userData,
  setUserData,
  setLoginInput,
  registerInput,
  emailCheck,
  checkBoxInfo,
}) {
  function alphanumeric(inputtxt) {
    try {
      if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(inputtxt)) {
        return true;
      } else return false;
    } catch {
      console.log('error');
    }
  }
  function numeric(inputtxt) {
    try {
      if (/^[0-9]/.test(inputtxt)) {
        return true;
      } else return false;
    } catch {
      console.log('error');
    }
  }

  return (
    <button
      className='login-button'
      onClick={() => {
        // 로그인
        if (children === '로그인') {
          let flag = false;

          userData.map((user) => {
            if (user?.email === email && user?.password === password) {
              alert(`로그인 성공! ${user.name}님 환영합니다.`);
              setLoginInput({ email: '', password: '' });
              flag = true;
              return;
            }
          });
          if (flag === false) alert('로그인 실패');
        }

        //가입
        else if (children === '가입하기') {
          // 이메일 중복확인하기
          if (emailCheck !== true) {
            alert('이메일 중복확인을 해주세요.');
          }
          // 두 비밀번호는 일치해야함
          else if (registerInput.password !== registerInput.password2) {
            alert('두 비밀번호가 일치하지 않습니다.');
          }
          // 비밀번호는 8~20자리, 영어 숫자 포함
          else if (
            registerInput.password.length < 8 ||
            registerInput.password.length > 20 ||
            alphanumeric(registerInput.password) === false
          ) {
            alert(
              '비밀번호는 8자리 이상 20자리 이하 영어, 숫자 조합으로 구성되어야 합니다.'
            );
          }
          // 전화번호는 숫자만
          else if (numeric(registerInput.phone) === false) {
            alert('전화번호는 숫자만 입력해주세요.');
          }
          // 빈 칸이 있으면 안됨
          else if (
            registerInput.name === '' ||
            registerInput.email === '' ||
            registerInput.password === '' ||
            registerInput.password2 === '' ||
            registerInput.phone === ''
          ) {
            alert('모두 입력해주세요.');
          }
          // 필수 항목은 체크해야함
          else if (
            checkBoxInfo[0].active === false ||
            checkBoxInfo[1].active === false
          ) {
            alert('필수 항목을 체크해주세요.');
          }

          // 회원가입 성공!
          else {
            axios({
              url: 'http://localhost:8100/api/posts',
              method: 'POST',

              // 선택 항목 체크 여부 저장
              data:
                checkBoxInfo[2].active === true
                  ? { ...registerInput, adAgree: true }
                  : registerInput,
            })
              .then(({ data }) => {
                setUserData((prev) => [...prev, data]);
              })
              .then(() => {
                alert(`회원가입 성공! ${registerInput.name}님 환영합니다.`);
              });
          }
        }
      }}
    >
      {children}
    </button>
  );
}
