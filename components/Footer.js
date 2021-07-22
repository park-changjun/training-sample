import React from 'react';
import SnsButton from './SnsButton';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='footer-notice'>
            <span>공지사항</span>
            <span>문화로운생활 결제모듈 서비스 점검</span>
          </div>
        </div>
        <hr />
        <div className='container'>
          <div className='informations'>
            <div className='info-menu'>
              <span>이용약관</span>
              <span>개인정보취급방침</span>
              <span>공간대관신청</span>
            </div>
            <p>
              (주)문화로운생활 ㅣ 대표이사 : 홍길동 ㅣ 주소 : 서울 강서구
              공항대로 186
              <br />
              사업자등록번호 : 123-45-67890 ㅣ 통신판매업신고 :
              2020-서울강서-1234 <br />
              고객센터 : 1234-5678 (운영시간 : 평일 09:00-18:00)
              <br />
              이메일 : culturelife_help@gmail.com
            </p>
            <p>COPYRIGHT © 문화로운생활. ALL RIGHT RESERVED</p>
          </div>
          <div className='icon-wrapper'>
            <SnsButton src={'img/kakao-talk.png'} />
            <SnsButton src={'img/facebook.svg'} />
            <SnsButton src={'img/instagram.png'} />
            <SnsButton src={'img/youtube.png'} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
