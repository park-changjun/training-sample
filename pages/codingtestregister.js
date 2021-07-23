import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Input from '../components/Input';
import styled from 'styled-components';

const RegisterBox = styled.div`
  width: 450px;
  margin: 0 auto;

  p {
    text-align: center;
    font-size: 36px;
  }

  span {
    display: block;
    font-weight: 300;
    text-align: center;
    margin-top: 30px;
    opacity: 1;

    a {
      color: #999999;
      text-decoration: none;
    }
  }
`;

const RegisterBtn = styled.button`
  width 450px;
  height : 50px;
  background-color : #c6f;
  border : none;
  color : white;
  margin : 0 auto;
`;

const Codingtestregister = () => {
  const [inputValue, setInputValue] = useState({
    type: 'USER', // 고정값
    active: true, // 고정값
    userId: '',
    password: '',
    nickname: '',
    phone: '',
  });
  const { userId, password, nickname, phone } = inputValue;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    // console.log(inputValue);
  };

  const goRegister = () => {
    funcCall();
  };

  const funcCall = async () => {
    try {
      const res = await axios({
        url: 'https://9001.in.actbase.io/api/accounts',
        method: 'POST',
        data: inputValue,
      });
      console.log(res);
      alert('회원가입 성공!');
    } catch (err) {
      throw err;
    }
  };

  return (
    <RegisterBox>
      <p>회원가입</p>
      <Input
        name='userId'
        placeholder='아이디를 입력하세요'
        value={userId}
        onChange={onChange}
      ></Input>
      <Input
        name='password'
        placeholder='비밀번호를 입력하세요'
        type='password'
        value={password}
        onChange={onChange}
      ></Input>
      <Input
        name='nickname'
        placeholder='별명을 입력하세요'
        onChange={onChange}
        value={nickname}
      ></Input>
      <Input
        name='phone'
        placeholder='전화번호를 입력하세요'
        onChange={onChange}
        value={phone}
      ></Input>
      <RegisterBtn onClick={goRegister}>회원가입</RegisterBtn>
      <span>
        <Link href='/codingtestlogin'>
          <a>로그인</a>
        </Link>
      </span>
    </RegisterBox>
  );
};

export default Codingtestregister;
