import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className='blackHeader'>
        <div className='container'>
          <span className='blackHeaderSlogan'>
            도시 속 문화 충전소, 문화로운 생활
          </span>

          <div>
            <span>
              <Link href='/register'>
                <a>회원가입</a>
              </Link>
            </span>
            <span>
              <Link href='/login'>
                <a>로그인</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className='whiteHeader'>
        <div className='container'>
          <img className='whiteHeaderIcon' src='/img/header-icon.png' />
          <div>
            <span>문화로운생활</span>
            <span>모임</span>
            <span>공간대관</span>
            <span>오시는길</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
