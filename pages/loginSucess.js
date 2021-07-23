import React from 'react'
import Header from './header';
import LoginMain from './loginMain';
import Footer from './footer';
import FixedKakaoChat from './fixedKakaoChat';


const LoginSucess = () => {
    return (
        <div>
            <Header />
            <section
                style={{ height: '800px', fontSize:'60px', display:'flex', alignItems:'center', justifyContent:'center'}}
            >
                <div>
                    로그인 성공
                </div>
            </section>
            <Footer />
            <FixedKakaoChat />
        </div>
    )
}

export default LoginSucess;