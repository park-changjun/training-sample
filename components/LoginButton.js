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
}) {
  return (
    <button
      className='login-button'
      onClick={() => {
        if (children === '로그인') {
          let flag = false;

          userData.map((user) => {
            if (user?.email === email && user?.password === password) {
              alert(`로그인 성공! ${email}님 환영합니다.`);
              setLoginInput({ email: '', password: '' });
              flag = true;
              return;
            }
          });
          if (flag === false) alert('로그인 실패');
        } else if (children === '가입하기') {
          if (emailCheck !== true) {
            alert('이메일 중복확인을 해주세요.');
          } else if (registerInput.password !== registerInput.password2) {
            alert('두 비밀번호가 일치하지 않습니다.');
          } else if (
            registerInput.name === '' ||
            registerInput.phone === '' ||
            registerInput.password === '' ||
            registerInput.password2 === '' ||
            registerInput.email === ''
          ) {
            alert('모두 입력해주세요.');
          } else {
            axios({
              url: 'http://localhost:8100/api/posts',
              method: 'POST',
              data: registerInput,
            })
              .then(({ data }) => setUserData((prev) => [...prev, data]))
              .then(() => {
                alert('회원가입 성공!');
              });
          }
        }
      }}
    >
      {children}
    </button>
  );
}
