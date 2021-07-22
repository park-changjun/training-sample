import React from 'react'
import Layout from '../components/Common/Layout'
import Input from '../components/Common/Input';


const Register = () => {
  return (
    <Layout>
      <main className="Register">
        <div className="wrapper">
          <div className="register-content">
            <p className="login-title">간편 회원가입</p>
            <Input label="이름"/>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Register
