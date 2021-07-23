import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import Layout from '../components/Common/Layout'
import Input from '../components/Common/Input'
import Check from '../components/Common/Check'
import Button from '../components/Common/Button'
import { register } from '../api'
import Router from 'next/router';
import Loading from '../components/Common/Loading'

const passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,20}$/;
const phoneRule = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;


const Register = () => {

  const [isRegistering, setIsRegistering] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  })



  const [checkBox, setCheckBox] = useState([{
    id: 1,
    essential: true,
    text: '이용약관 동의',
    checked: false,
  }, {
    id: 2,
    essential: true,
    text: '개인정보수집 및 이용 동의',
    checked: false,
  }, {
    id: 3,
    essential: false,
    text: '이벤트 및 정보 수신 동의',
    checked: false,
  }])

  const { name, email, password, phone } = form


  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const [passwordConfirm, setPasswordConfirm] = useState('')

  const clickCheck = (id) => {
      setCheckBox((prev) => {
        return prev.map((check) => (
          check.id === id ? {...check, checked: !check.checked} : check
        ))
      })
  }

  const handleChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value)
  }

  const onSubmit = useCallback(
    async (e) => {
      try {
      e.preventDefault();
      console.log('onSubmit');
      
      
      for (let key of Object.keys(form)) {
        console.log(key)
        if(!form[key]) {
          return alert(`${key}는 꼭 입력해야 합니다.`)
        }
      }
      
      if(!passwordRule.test(password)) {
        return alert('비밀번호는 8~20 자리의 숫자와 영문만 가능합니다.')
      }

      if(password !== passwordConfirm) {
        return alert('패스워드가 일치하지 않습니다.')
      }

      if(!phoneRule.test(phone)) {
        return alert('알맞은 핸드폰 번호를 입력해주세요.')
      }

      for(let box of checkBox) {
        if (box.essential) {
          if(!box.checked) return alert('필수사항을 체크해주세요.')
        }
      }


      setIsRegistering(true);

      const { data: newUser } = await register(form)

      setIsRegistering(false);


      setTimeout(() => {
        alert(`${newUser.name}님 가입을 축하합니다.`)
      }, 200);

      setTimeout(() => {
        Router.push('login');
      }, 300)

      
    } catch (e) {
      console.log(e)
      setIsRegistering(false);
    }},
    [form, passwordConfirm, checkBox]
  )


  useEffect(() => {
    console.log(checkBox);
  }, [checkBox])

  return (
    <Layout>
      <main className="Register">
        <div className="wrapper">
          <form className="register-content" onSubmit={onSubmit}>
            <p className="register-title">간편 회원가입</p>
            <Input
              name="name"
              label="이름"
              placeholder="이름을 입력하세요."
              value={name}
              onChange={onChange}
            />
            <Input
              type="email"
              name="email"
              label="이메일"
              placeholder="이메일을 입력하세요."
              verification
              value={email}
              onChange={onChange}
            />
            <Input
              type="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호를 입력하세요. (8~20자 이내의 영문과 숫자 조합)"
              value={password}
              onChange={onChange}
            />
            <Input
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호를 확인해주세요."
              value={passwordConfirm}
              onChange={handleChangePasswordConfirm}
            />
            <Input
              name="phone"
              label="휴대폰 번호"
              placeholder="휴대폰번호를 입력하세요.(숫자만 입력)"
              value={phone}
              onChange={onChange}
            />
            <div className="register-check-wrapper">

              {
                checkBox &&
                checkBox.map((check) => (
                  <Check 
                    clickCheck={clickCheck}
                    key={check.id}
                    content={check} 
                  />
                ))
              }
            </div>
            <Button text="가입하기" />
          </form>
        </div>
      </main>
      <Loading page="회원가입" isOpen={isRegistering}/>
    </Layout>
  )
}

export default Register
