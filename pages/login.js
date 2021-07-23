import React from 'react';
import Header from './header';
import LoginMain from './loginMain';
import Footer from './footer';
import FixedKakaoChat from './fixedKakaoChat';

const Login = ({isLogin, setIsLogin}) => {
    return (
        <div>
            <Header isLogin={isLogin} setIsLogin={setIsLogin}/>
            <LoginMain isLogin={isLogin} setIsLogin={setIsLogin}/>
            <Footer/>
            <FixedKakaoChat/>
        </div>
    )
};

export default Login;
