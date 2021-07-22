import React from 'react';
import Input from './Input';

export default function RegisterBox() {
  return (
    <div className='register-box-container login-box-container'>
      <p className='login'>간편 회원가입</p>
      <span>이름</span>
      <Input name='name' placeholder='이름을 입력하세요.' />
      <span>이메일</span>
      <div className='email'>
        <Input name='email' placeholder='이메일을 입력하세요.' />
        <button>중복확인</button>
      </div>
    </div>
  );
}
