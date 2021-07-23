import React from 'react'
import Header from './header';
import Footer from './footer';
import FixedKakaoChat from './fixedKakaoChat';
import RegisterMain from './registerMain';



const Register = ({isLogin, setIsLogin}) => {
    return (
        <div>
            <Header isLogin={isLogin} setIsLogin={setIsLogin} />
            <RegisterMain />
            <Footer />
            <FixedKakaoChat />
        </div>
    )
};

export default Register;
