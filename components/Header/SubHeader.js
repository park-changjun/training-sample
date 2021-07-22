import React from 'react';
import Link from 'next/link';

const SubHeader = () => {
  return (
    <div className="sub-header">
      <div className="content">
        <p>도시속문화충전소,문화로운생활</p>
        <ul>
          <li><Link href="/register"><a>회원가입</a></Link></li>
          <li><Link href="/login"><a>로그인</a></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default SubHeader
