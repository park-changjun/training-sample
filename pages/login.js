import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Layout from '../components/Common/Layout'
import { login } from '../api'
import Check from '../components/Common/Check'
import Input from '../components/Common/Input'
import Button from '../components/Common/Button'
import SocialLogin from '../components/Login/SocialLogin'

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const { email, password } = form

  const [checkBox, setCheckBox] = useState([
    {
      id: 1,
      essential: false,
      text: '로그인 상태 유지',
      checked: false,
    },
  ])

  const clickCheck = (id) => {
    setCheckBox((prev) => {
      return prev.map((check) =>
        check.id === id ? { ...check, checked: !check.checked } : check
      )
    })
  }

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name] : e.target.value,
    }))
  }

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      console.log('submit');

      const {data} = await login(form)
      
      if(!data.length) return alert('잘못된 정보를 입력하셨습니다. 확인하고 다시 입력해주세요.')

      alert('로그인이 완료되었습니다!');

    },
    [form],
  )

  useEffect(() => {
    console.log(form);
  }, [form])

  return (
    <Layout>
      <main className="Login">
        <div className="wrapper">
          <form className="login-content" onSubmit={onSubmit}>
            <p className="login-title">로그인</p>
            <div className="login-input-wrapper">
              <Input
                name="email"
                value={email}
                onChange={onChange}
                placeholder="이메일을 입력하세요."
              />
              <Input
                type="password"
                name="password" 
                value={password}
                onChange={onChange}
                placeholder="비밀번호를 입력하세요." 
              />
            </div>
            <div className="login-check-wrapper">
              {checkBox &&
                checkBox.map((check) => (
                  <Check
                    clickCheck={clickCheck}
                    key={check.id}
                    content={check}
                  />
                ))}
            </div>
            <Button text="로그인" />
            <div className="login-setting">
              <ul>
                <li>
                  <Link href="/register">
                    <a>간편 회원가입</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>비밀번호 재설정</a>
                  </Link>
                  </li>
              </ul>
            </div>
            <SocialLogin />
          </form>
        </div>
      </main>
    </Layout>
  )
}

export default Login
