import React from 'react';
import Header from './header';
import Footer from './footer';
import FixedKakaoChat from './fixedKakaoChat';

const Main = ({isLogin, seLogin}) => {
    if(isLogin){
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
    }else{
        return (
            <div>
            <Header />
            <section
                style={{ height: '800px', fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                <div className="container">
                    로그인이 필요합니다. 오른쪽 위의 버튼을 클릭해 회원가입 페이지로 이동해주세요.
                </div>
            </section>
            <Footer />
            <FixedKakaoChat />
        </div>
    )
    }
};

export default Main;