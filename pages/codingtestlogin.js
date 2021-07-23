import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Input from '../components/Input';
import styled from 'styled-components';
import axios from 'axios';

axios.defaults.withCredentials = true;

const LoginBox = styled.div`
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

const LoginBtn = styled.button`
  width 450px;
  height : 50px;
  background-color : #c6f;
  border : none;
  color : white;
  margin : 0 auto;
`;

const Codingtestlogin = () => {
  const [res, setRes] = useState('');
  const [inputValue, setInputValue] = useState({
    username: '',
    password: '',
    grant_type: 'password',
  });
  const { username, password, grant_type } = inputValue;

  // useEffect(() => {
  //   // onToken();
  // }, [res]);

  const onToken = async () => {
    try {
      const authentication = await axios({
        url: 'https://9001.in.actbase.io/api/accounts/authentication',
        method: 'GET',
      });
      console.log(authentication);
    } catch (e) {
      throw e;
    }
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    // console.log(inputValue);
  };

  const goLogin = () => {
    funcCall();
  };

  const funcCall = async () => {
    try {
      const frm = new FormData();
      frm.append('username', username);
      frm.append('password', password);
      frm.append('grant_type', 'password');

      const r = await axios({
        url: 'https://9001.in.actbase.io/oauth/token',
        method: 'POST',
        data: frm,
        auth: {
          username: 'ant-league',
          password: 'ehdgkrroalflrm!@',
        },
      });
      console.log(r);
      setRes(r);
    } catch (err) {
      throw err;
    }
  };

  return (
    <LoginBox>
      <p>로그인</p>
      <Input
        name='username'
        placeholder='아이디를 입력하세요'
        value={username}
        onChange={onChange}
      ></Input>
      <Input
        name='password'
        placeholder='비밀번호를 입력하세요'
        type='password'
        value={password}
        onChange={onChange}
      ></Input>
      <LoginBtn onClick={goLogin}>로그인</LoginBtn>
      <br />
      <br />
      <LoginBtn onClick={onToken}>인증</LoginBtn>
      <span>
        <Link href='/codingtestregister'>
          <a>회원가입</a>
        </Link>
      </span>
    </LoginBox>
  );
};

export default Codingtestlogin;
