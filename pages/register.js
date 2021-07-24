import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import FixedKakaoChat from '../components/fixedKakaoChat';
import RegisterMain from '../components/registerMain';



const Register = ({ isLogin, setIsLogin }) => {
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
