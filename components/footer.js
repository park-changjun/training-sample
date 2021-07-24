import React from 'react'

const Footer = () => {
    return (
        <footer>
        <div className="footerWrap">
          <div className="footerContainer">
            <div className="notice">
              <p>
                공지사항<span>문화로운생활 결제모듈 서비스 점검</span>
              </p>
            </div>

            <div className="footerBox">
              <div className="footerLeft">
                <div className="footerNav">
                  <ul>
                    <li>
                      <a href="#">이용약관</a>
                    </li>
                    <li>
                      <a href="#">개인정보취급방침</a>
                    </li>
                    <li>
                      <a href="#">공간대관신청</a>
                    </li>
                  </ul>
                </div>
                <div className="footerAddress">
                  <p>
                    (주)문화로운생활 ㅣ 대표이사 : 홍길동 ㅣ 주소 : 서울 강서구
                    공항대로 186
                    <br />
                    사업자등록번호 : 123-45-67890 ㅣ 통신판매업신고 :
                    2020-서울강서-1234
                    <br />
                    고객센터 : 1234-5678 (운영시간 : 평일 09:00-18:00)
                    <br />
                    이메일 : culturelife_help@gmail.com
                  </p>
                </div>
                <p className="copyright">
                  COPYRIGHT © 문화로운생활. ALL RIGHT RESERVED
                </p>
              </div>

              <div className="footerRight">
                <div className="footerIconBtn">
                  <button className="footerKakaoBtn">
                    <img src="img-login/layer-26.png" />
                  </button>
                  <button className="footerFaceBtn">
                    <img src="img-login/layer-27.png" />
                  </button>
                  <button className="footerInstaBtn">
                    <img src="img-login/layer-23.png" />
                  </button>
                  <button className="footerYoutubeBtn">
                    <img src="img-login/layer-24.png" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
