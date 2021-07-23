import React from 'react';
import Header from './header';
import Footer from './footer';
import FixedKakaoChat from './fixedKakaoChat';

const Main = ({isLogin, seLogin}) => {
    return (
        <div>
            <Header />
            <section
                style={{ height: '800px', fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                <div className="container">
                    로그인 성공 후 이동했습니다.<br/>회원가입 로그인 버튼이 사라지고 로그아웃 버튼이 생겼습니다.
                </div>
            </section>
            <Footer />
            <FixedKakaoChat />
        </div>
    )
};

export default Main;