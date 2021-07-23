import React from 'react';
import Link from 'next/dist/client/link';

//<button><Link href="/register"><a>회원가입으로이동</a></Link></button>

const Header = ({isLogin, setLogin}) => {
    if(isLogin){
        return(
            <header>
            <div className="header-black">
            <div className="container">
                <div className="header-slogan">
                도시 속 문화 충전소, 문화로운생활
                </div>
                <div className="header-nav">
                    <div><Link href="/register"><a>회원가입</a></Link ></div>
                    <span>|</span>
                    <div><Link href="/main"><a>로그아웃</a></Link></div>
                </div>
            </div>
        </div>
        <div className="header-white">
            <div className="container">
            <div>
                <img src="/img/cultureLife/layer-21.png"/>
            </div>
            <div className="header-nav">
                <div><a>문화로운생활</a></div>
                <div><a>모임</a></div>
                <div><a>공간대관</a></div>
                <div><a>오시는길</a></div>
            </div>
            </div>
        </div>
        </header>
        )
    }else{
        return(
            <header>
            <div className="header-black">
            <div className="container">
                <div className="header-slogan">
                도시 속 문화 충전소, 문화로운생활
                </div>
                <div className="header-nav">
                    <div><Link href="/register"><a>회원가입</a></Link ></div>
                    <span>|</span>
                    <div><Link href="/login"><a>로그인</a></Link></div>
                </div>
            </div>
        </div>
        <div className="header-white">
            <div className="container">
            <div>
                <img src="/img/cultureLife/layer-21.png"/>
            </div>
            <div className="header-nav">
                <div><a>문화로운생활</a></div>
                <div><a>모임</a></div>
                <div><a>공간대관</a></div>
                <div><a>오시는길</a></div>
            </div>
            </div>
        </div>
        </header>
        )
    }
    
};

export default Header;