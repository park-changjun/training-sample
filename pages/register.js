import React from 'react'
import Header from './header';
import Footer from './footer';
import FixedKakaoChat from './fixedKakaoChat';
import RegisterMain from './registerMain';



const Register = () => {
    return (
        <div>
            <Header />
            <RegisterMain />
            <Footer />
            <FixedKakaoChat />
        </div>
    )
};

export default Register;
