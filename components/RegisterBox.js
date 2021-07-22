import React, { useState } from 'react';
import Input from './Input';
import LoginButton from './LoginButton';
import CheckBox from './CheckBox';

export default function RegisterBox() {
  const [checkBoxInfo, setCheckBoxInfo] = useState([
    {
      id: 1,
      option: false,
      list: '이용약관 동의',
      needDetail: true,
      active: false,
    },
    {
      id: 2,
      option: false,
      list: '개인정보수집 및 이용 동의',
      needDetail: true,
      active: false,
    },
    {
      id: 1,
      option: true,
      list: '이용약관 동의',
      needDetail: false,
      active: false,
    },
  ]);

  return (
    <div className='register-box-container login-box-container'>
      <p className='login'>간편 회원가입</p>

      <span className='title'>이름</span>
      <Input name='name' placeholder='이름을 입력하세요.' />

      <span className='title'>이메일</span>
      <div className='email'>
        <Input name='email' placeholder='이메일을 입력하세요.' />
        <button>중복확인</button>
      </div>

      <span className='title'>비밀번호</span>
      <Input
        name='password'
        placeholder='비밀번호를 입력하세요. (8~20자 이내의 영문과 숫자 조합)'
      ></Input>
      <Input name='password2' placeholder='비밀번호를 확인해주세요.'></Input>

      <span className='title'>휴대폰 번호</span>
      <Input
        name='phone'
        placeholder='휴대폰번호를 입력하세요. (숫자만 입력)'
      ></Input>

      <div className='checkbox-wrapper'>
        {checkBoxInfo.map((item) => (
          <CheckBox
            item={item}
            id={item.id}
            key={item.id}
            setCheckBoxInfo={setCheckBoxInfo}
          />
        ))}
      </div>

      <LoginButton>가입하기</LoginButton>
    </div>
  );
}
