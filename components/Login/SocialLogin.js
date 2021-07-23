import React from 'react'

const SocialLogin = () => {
  return (
    <div className="SocialLogin">
        <div className="title">
            <div></div>
            <p>간편 소셜 로그인</p>
            <div></div>
        </div>
        <ul className="social-icon-box">
          <li><img src="images/auth/naver-icon.png"/></li>
          <li><img src="images/auth/facebook-icon.png"/></li>
          <li><img src="images/auth/kakao-icon.png"/></li>
        </ul>

        <p>SNS계정으로 간편하게 가입하여 서비스 이용이 가능합니다.</p>

    </div>
  )
}

export default SocialLogin
