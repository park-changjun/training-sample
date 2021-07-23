import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterBox from '../components/RegisterBox';
import Link from 'next/link';
import KakaoBanner from '../components/KakaoBanner';
const Register = () => {
  return (
    <>
      <Header />
      <RegisterBox />
      <KakaoBanner />
      <Footer />
    </>
  );
};

export default Register;
