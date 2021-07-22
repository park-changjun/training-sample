import React from 'react';
import Link from 'next/link';
import Header from './header';
import FormInput from './formInput';
import BigConfirmButton from './bigConfirmButton';
import CheckInput from './checkInput';

//<button><Link href="/register"><a>회원가입으로이동</a></Link></button>



const Main = () => {
    return (
        <main className='login-main'>
            <div className="container">
                <div className="login-wrap">
                    <div className="main-title">로그인</div>
                    <FormInput text={'이메일을 입력하세요.'} />
                    <FormInput text={'비밀번호를 입력하세요.'}/>
                    <CheckInput text={'로그인 상태 유지'}/>
                    <BigConfirmButton text={'로그인'}/>
                    <div className="login-form-submenu">
                    <div><a>간편 회원가입</a></div>
                <span>|</span>
                <div><a>비밀번호 재설정</a></div>
                    </div>
                    <div class="social-login-title">
                        <div>--</div>
                        간편소설 로그인
                        <div>--</div>
                    </div>
                    <div>
                        <img src="/img/cultureLife/group-2_3.png"/>
                        <img src="/img/cultureLife/group-2.png"/>
                        <img src="/img/cultureLife/group-2_2.png"/>
                    </div>
                </div>
            </div>
        </main>
    )
};


const Login = () => {
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
};

export default Login;
