import React from 'react'

const FooterInfo = () => {
  return (
    <div className="info">
      <ul className="terms">
        <li>이용약관</li>
        <li>개인정보취급방침</li>
        <li>공간대관신청</li>
      </ul>
      <div className="detail">
        <p>(주)문화로운생활 ㅣ 대표이사 :  홍길동 ㅣ 주소 : 서울 강서구 공항대로 186</p>
        <p>사업자등록번호 : 123-45-67890 ㅣ 통신판매업신고 : 2020-서울강서-1234</p>
        <p>고객센터 : 1234-5678 (운영시간 : 평일 09:00-18:00)</p>
        <p>이메일 : culturelife_help@gmail.com</p>
      </div>
      <p className="copyright">COPYRIGHT © 문화로운생활. ALL RIGHT RESERVED</p>
    </div>
  )
}

export default FooterInfo



