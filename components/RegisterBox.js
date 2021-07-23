import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './Input';
import LoginButton from './LoginButton';
import CheckBox from './CheckBox';

export default function RegisterBox() {
  const [userData, setUserData] = useState([]);
  const [emailCheck, setEmailCheck] = useState(false);

  const [registerInput, setRegisterInput] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
    adAgree: false,
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setRegisterInput({ ...registerInput, [name]: value });
  };

  useEffect(() => {
    axios({ url: 'http://localhost:8100/api/posts', method: 'GET' })
      .then(({ data }) => setUserData(data))
      .catch(() => {
        console.log('error');
      });
  }, []);

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
      id: 3,
      option: true,
      list: '이벤트 및 정보 수신 동의',
      needDetail: false,
      active: false,
    },
  ]);

  return (
    <div className='register-box-container login-box-container'>
      <p className='login'>간편 회원가입</p>

      <span className='title'>이름</span>
      <Input name='name' placeholder='이름을 입력하세요.' onChange={onChange} />

      <span className='title'>이메일</span>
      <div className='email'>
        <Input
          name='email'
          placeholder='이메일을 입력하세요.'
          onChange={onChange}
        />
        <button
          onClick={() => {
            let flag = false;
            userData.map((user) => {
              if (registerInput.email === user.email) {
                alert('다른 이메일을 입력해주세요.');
                flag = true;
              }
            });
            if (flag === false) {
              if (registerInput.email === '') alert('이메일을 입력해주세요.');
              else {
                alert('사용하셔도 됩니다.');
                setEmailCheck(true);
              }
            }
          }}
        >
          중복확인
        </button>
      </div>

      <span className='title'>비밀번호</span>
      <Input
        name='password'
        placeholder='비밀번호를 입력하세요. (8~20자 이내의 영문과 숫자 조합)'
        type='password'
        onChange={onChange}
      ></Input>
      <Input
        name='password2'
        placeholder='비밀번호를 확인해주세요.'
        type='password'
        onChange={onChange}
      ></Input>

      <span className='title'>휴대폰 번호</span>
      <Input
        name='phone'
        placeholder='휴대폰번호를 입력하세요. (숫자만 입력)'
        onChange={onChange}
      ></Input>

      <div className='checkbox-wrapper'>
        {checkBoxInfo &&
          checkBoxInfo.map((item) => (
            <CheckBox
              item={item}
              id={item.id}
              key={item.id}
              setCheckBoxInfo={setCheckBoxInfo}
            />
          ))}
      </div>

      <LoginButton
        registerInput={registerInput}
        emailCheck={emailCheck}
        setUserData={setUserData}
        checkBoxInfo={checkBoxInfo}
        setRegisterInput={setRegisterInput}
      >
        가입하기
      </LoginButton>
    </div>
  );
}
