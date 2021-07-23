import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginBox from '../components/LoginBox';
import KakaoBanner from '../components/KakaoBanner';

const Login = () => {
  return (
    <>
      <Header />
      <LoginBox />
      <KakaoBanner />
      <Footer />
    </>
  );
};

export default Login;
