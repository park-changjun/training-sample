import React from 'react'
import { useState, useEffect } from 'react';
import FormInput from './formInput';
import LoginConfirmButton from './loginConfirmButtonLogin';
import CheckInput from './checkInput';
import Link from 'next/dist/client/link';

const LoginMain = ({ isLogin, setIsLogin }) => {
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        loginForm.email && loginForm.password ?
            setIsActive(true) :
            setIsActive(false)
    }, [loginForm]);

    return (
        <main className='login-main'>
            <div className="container">
                <div className="login-wrap">
                    <div className="main-title">로그인</div>
                    <FormInput text={'이메일을 입력하세요.'} btnText={false} setForm={setLoginForm} info={'email'} />
                    <FormInput text={'비밀번호를 입력하세요.'} btnText={false} setForm={setLoginForm} info={'password'} />
                    <CheckInput text={'로그인 상태 유지'} />
                    <LoginConfirmButton text={'로그인'} loginForm={loginForm} isActive={isActive} isLogin={isLogin} setIsLogin={setIsLogin} />
                    <div className="login-form-submenu">
                        <div><Link href="/register"><a>간편 회원가입</a></Link ></div>
                        <span>|</span>
                        <div><a>비밀번호 재설정</a></div>
                    </div>
                    <div className="social-login-title">
                        <div className="line"></div><span>간편소설 로그인</span><div className="line"></div>
                    </div>
                    <div className="social-icon-wrap">
                        <img src="/img/cultureLife/group-2_3.png" />
                        <img src="/img/cultureLife/group-2.png" />
                        <img src="/img/cultureLife/group-2_2.png" />
                    </div>
                    <div className="social-comment">SNS계정으로 간편하게 가입하여 서비스 이용이 가능합니다.</div>
                </div>
                <div className="notice-wrap">
                    <div className="notice">공지사항</div>
                    <div className="notice-content">문화로운생활 결제모듈 서비스점검</div>
                </div>
            </div>
        </main>
    )
};

export default LoginMain;