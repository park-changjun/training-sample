import React from 'react'
import FormInput from './formInput';
import BigConfirmButtonLogin from './bigConfirmButtonLogin';
import CheckInput from './checkInput';
import { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = 'http://localhost:8100/api/posts';


const LoginMain = () => {
    const [memberList, setMemberList] = useState([]);
    const [loginForm, setLoginForm] = useState({email: '', password: ''});
    useEffect(() => {
        axios({ url: API_URL, method: 'GET' })
            .then(({ data }) => setMemberList(data))
    }, [])
    return (
        <main className='login-main'>
            <div className="container">
                <div className="login-wrap">
                    <div className="main-title">로그인</div>
                    <FormInput text={'이메일을 입력하세요.'} btnText={false} setForm={setLoginForm} info={'email'}/>
                    <FormInput text={'비밀번호를 입력하세요.'} btnText={false} setForm={setLoginForm} info={'password'} />
                    <CheckInput text={'로그인 상태 유지'} />
                    <BigConfirmButtonLogin text={'로그인'} loginForm={loginForm} memberList={memberList}/>
                    <div className="login-form-submenu">
                        <div><a>간편 회원가입</a></div>
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