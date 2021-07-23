import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

import SnsButton from './SnsButton';
import Input from './Input';
import LoginButton from './LoginButton';
import { IoIosCheckboxOutline } from 'react-icons/io';

const LoginBox = () => {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });
  const { email, password } = loginInput;
  const [keepLogin, setKeepLogin] = useState(false);
  const [userData, setUserData] = useState([]);

  const onChange = (e) => {
    const { value, name } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  useEffect(() => {
    axios({ url: 'http://localhost:8100/api/posts', method: 'GET' })
      .then(({ data }) => setUserData(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className='login-box-container'>
      <p className='login'>로그인</p>

      <Input
        name='email'
        placeholder='이메일을 입력하세요.'
        value={email}
        onChange={onChange}
      />
      <Input
        name='password'
        placeholder='비밀번호를 입력하세요.'
        type='password'
        value={password}
        onChange={onChange}
      />
      <div className='checkbox'>
        <IoIosCheckboxOutline
          className='check'
          color={keepLogin ? '#efcf34' : '#dbdbdb'}
          size='24'
          onClick={() => {
            setKeepLogin(!keepLogin);
          }}
        />
        <span>로그인 상태 유지</span>
      </div>

      <LoginButton
        email={email}
        password={password}
        userData={userData}
        setLoginInput={setLoginInput}
      >
        로그인
      </LoginButton>
      <div className='login-option'>
        <span>
          <Link href='/register'>
            <a>회원가입</a>
          </Link>
        </span>
        <span>|</span>
        <span>비밀번호 재설정</span>
      </div>

      <span className='line'></span>
      <span className='social-login-txt'>간편 소셜 로그인</span>
      <div className='icon-wrapper'>
        <SnsButton src='img/naver.png'></SnsButton>
        <SnsButton src='img/facebook-white.png'></SnsButton>
        <SnsButton src='img/kakao-yellow.png'></SnsButton>
      </div>
      <p className='social-login-explain'>
        SNS계정으로 간편하게 가입하여 서비스 이용이 가능합니다.
      </p>
    </div>
  );
};

export default LoginBox;
