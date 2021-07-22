import React from 'react'
import Link from 'next/link';
import Layout from '../components/Common/Layout';
import axios from 'axios';

const Login = () => {


  return (
    <Layout>
      <main className="Login">
        Login
        <button><Link href="/register"><a>회원가입</a></Link></button>
      </main>
    </Layout>
  )
}

export default Login
