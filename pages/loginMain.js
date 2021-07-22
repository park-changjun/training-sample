import React from 'react'
import FormInput from './formInput';
import BigConfirmButton from './bigConfirmButton';
import CheckInput from './checkInput';

const LoginMain = () => {
    return (
        <main className='login-main'>
            <div className="container">
                <div className="login-wrap">
                    <div className="main-title">로그인</div>
                    <FormInput text={'이메일을 입력하세요.'} />
                    <FormInput text={'비밀번호를 입력하세요.'} />
                    <CheckInput text={'로그인 상태 유지'} />
                    <BigConfirmButton text={'로그인'} />
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
                <div class="notice-wrap">
                    <div class="notice">공지사항</div>
                    <div class="notice-content">문화로운생활 결제모듈 서비스점검</div>
                </div>
            </div>
        </main>
    )
};

export default LoginMain;