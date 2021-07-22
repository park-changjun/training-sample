import React from 'react';
import { GrCheckboxSelected } from 'react-icons/gr';
import SnsButton from './SnsButton';
import Input from './Input';
import LoginButton from './LoginButton';

const LoginBox = () => {
  return (
    <div className='login-box-container'>
      <p className='login'>로그인</p>

      <form action=''>
        <Input name='email' placeholder='이메일을 입력하세요.' value='' />
        <Input
          name='password'
          placeholder='비밀번호를 입력하세요.'
          type='password'
          value=''
        />
        <div className='checkbox'>
          <GrCheckboxSelected className='check' />
          <span>로그인 상태 유지</span>
        </div>

        <LoginButton>로그인</LoginButton>
        <div className='login-option'>
          <span>간편 회원가입</span>
          <span>|</span>
          <span>비밀번호 재설정</span>
        </div>
      </form>

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
