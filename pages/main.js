import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import FixedKakaoChat from './fixedKakaoChat';

const Main = ({ isLogin, setIsLogin }) => {
    return (
        <div>
            <Header isLogin={isLogin} setIsLogin={setIsLogin} />
            <section
                style={{ height: '800px', fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                {isLogin ?
                    <div className="container">
                        로그인 성공 후 이동했습니다.<br />회원가입 로그인 버튼이 사라지고 로그아웃 버튼이 생겼습니다.
                    </div> : <div className="container">
                        로그인이 필요합니다.<br /> 우측 상단의 버튼을 클릭해 로그인하거나 가입해주세요.
                    </div>
                }
            </section>
            <Footer />
            <FixedKakaoChat />
        </div>
    )
};

export default Main;