import React from 'react'

const Footer = () => {
    return (
        <footer>
                <div className="container">
                    <div>
                        <div className="footer-info">
                            <span>이용약관</span><span>개인정보취급방침</span><span>공관대관신청</span>
                        </div>
                        <div className="footer-addr">
                            (주)문화로운생활 ㅣ 대표이사 :  홍길동 ㅣ 주소 : 서울 강서구 공항대로 186
                            사업자등록번호 : 123-45-67890 ㅣ 통신판매업신고 : 2020-서울강서-1234
                            고객센터 : 1234-5678 (운영시간 : 평일 09:00-18:00)<br />
                            이메일 : culturelife_help@gmail.com<br /><br /><span>COPYRIGHT © 문화로운생활. ALL RIGHT RESERVED</span>
                        </div>
                    </div>
                    <div className="footer-icon-wrap">
                        <div><img src="/img/cultureLife/layer-26.png" /></div>
                        <div><img src="/img/cultureLife/layer-27.png" /></div>
                        <div><img src="/img/cultureLife/layer-23.png" /></div>
                        <div><img src="/img/cultureLife/layer-24.png" /></div>
                    </div>
                </div>
            </footer>
    )
}


export default Footer;