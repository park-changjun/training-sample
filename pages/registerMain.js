import React from 'react'
import FormInput from './formInput';
import BigConfirmButton from './bigConfirmButton';
import CheckInput from './checkInput';
import FormInputLabel from './formInputLabel';
import { useState, useEffect } from 'react';


const RegisterMain = ({ isLogin }) => {
    const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', phoneNum: '', terms: false, personal: false, option: false });
    const [isConfirm, setIsConfirm] = useState(false);
    const [isEqual, setIsEqual] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        registerForm.name && registerForm.email && registerForm.password && registerForm.phoneNum && registerForm.terms && registerForm.personal && isConfirm && isEqual ?
            setIsActive(true) :
            setIsActive(false);
    }, [registerForm, isEqual]);

    return (
        <main className="register-main">
            <div className="container">
                <div className="register-wrap">
                    <div className="main-title">간편 회원가입</div>
                    <FormInputLabel text={'이름'} />
                    <FormInput text={'이름을 입력하세요.'} btnText={false} setForm={setRegisterForm} info={'name'} />
                    <FormInputLabel text={'이메일'} />
                    <FormInput text={'이메일을 입력하세요.'} btnText={'중복확인'} setForm={setRegisterForm} info={'email'} registerForm={registerForm} setIsConfirm={setIsConfirm} />
                    <FormInputLabel text={'비밀번호'} />
                    <FormInput text={'비밀번호를 입력하세요. (8~20자 이내의 영문과 숫자 조합)'} btnText={false} setForm={setRegisterForm} info={'password'} />
                    <FormInput text={'비밀번호를 확인해주세요.'} btnText={false} setForm={setRegisterForm} info={'password'} registerForm={registerForm} setIsEqual={setIsEqual} />
                    <FormInputLabel text={'휴대폰 번호'} />
                    <FormInput text={'휴대폰번호를 입력하세요. (숫자만 입력)'} btnText={false} info={'phoneNum'} setForm={setRegisterForm} />
                    <div className="register-checklist">
                        <CheckInput text={'[필수] 이용약관 동의'} detail={'보기'} setForm={setRegisterForm} info={'terms'} />
                        <CheckInput text={'[필수] 개인정보수집 및 이용 동의'} detail={'보기'} setForm={setRegisterForm} info={'personal'} />
                        <CheckInput text={'[선택] 이벤트 및 정보 수신 동의'} setForm={setRegisterForm} info={'option'} />
                    </div>
                    <BigConfirmButton text={'가입하기'} registerForm={registerForm} isActive={isActive} />
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
