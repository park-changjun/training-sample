import React from 'react';
import Link from 'next/link';
import Header from './header';
import LoginMain from './loginMain';
import Footer from './footer';
import FixedKakaoChat from './fixedKakaoChat';

const Login = () => {
    return (
        <div>
            <Header />
            <LoginMain />
            <Footer/>
            <FixedKakaoChat/>
        </div>
    )
};

export default Login;
