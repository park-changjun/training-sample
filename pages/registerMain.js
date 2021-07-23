import React from 'react'
import FormInput from './formInput';
import BigConfirmButton from './bigConfirmButton';
import CheckInput from './checkInput';
import FormInputLabel from './formInputLabel';
import { useState, useEffect } from 'react';


const RegisterMain = () => {
    const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', phoneNum: '' });
    return (
        <main className="register-main">
            <div className="container">
                <div className="register-wrap">
                    <div className="main-title">간편 회원가입</div>
                    <FormInputLabel text={'이름'} />
                    <FormInput text={'이름을 입력하세요.'} btnText={false} setForm={setRegisterForm} info={'name'}/>
                    <FormInputLabel text={'이메일'} />
                    <FormInput text={'이메일을 입력하세요.'} btnText={'중복확인'} setForm={setRegisterForm} info={'email'}/>
                    <FormInputLabel text={'비밀번호'} />
                    <FormInput text={'비밀번호를 입력하세요. (8~20자 이내의 영문과 숫자 조합)'} btnText={false} setForm={setRegisterForm} info={'password'}/>
                    <FormInput text={'비밀번호를 확인해주세요.'} btnText={false}  setForm={setRegisterForm} info={'password'}/>
                    <FormInputLabel text={'휴대폰 번호'} />
                    <FormInput text={'휴대폰번호를 입력하세요. (숫자만 입력)'} btnText={false} setForm={setRegisterForm} info={'phoneNum'}/>
                    <div className="register-checklist">
                        <CheckInput text={'[필수] 이용약관 동의'} detail={'보기'} />
                        <CheckInput text={'[필수] 개인정보수집 및 이용 동의'} detail={'보기'} />
                        <CheckInput text={'[선택] 이벤트 및 정보 수신 동의'} />
                    </div>
                    <BigConfirmButton text={'가입하기'} registerForm={registerForm}/>
                </div>
                <div className="notice-wrap">
                    <div className="notice">공지사항</div>
                    <div className="notice-content">문화로운생활 결제모듈 서비스점검</div>
                </div>
            </div>
        </main>
    )
}

export default RegisterMain;
