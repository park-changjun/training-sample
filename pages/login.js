import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import FixedKakaoChat from '../components/fixedKakaoChat';
import LoginMain from '../components/loginMain';

const Login = ({ isLogin, setIsLogin }) => {
    return (
        <div>
            <Header isLogin={isLogin} setIsLogin={setIsLogin} />
            <LoginMain isLogin={isLogin} setIsLogin={setIsLogin} />
            <Footer />
            <FixedKakaoChat />
        </div>
    )
};

export default Login;