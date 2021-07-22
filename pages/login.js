import React from 'react';
import Link from 'next/link';
import Header from './header';
import LoginMain from './loginMain';
import Footer from './footer';

//<button><Link href="/register"><a>회원가입으로이동</a></Link></button>

const FixedKakaoChat = () => {
    return(<img className="fixed-kakao" src="/img/cultureLife/float-btn.png"/>)
};


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
