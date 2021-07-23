import React from 'react';


const Loading = ({ page, isOpen}) => {

  
return isOpen ? 
  (
    <div className="Loading">
      <img src={'/images/auth/packman.svg'} />
      <p>{page} 중입니다. 잠시만 기다려 주세요~</p>
    </div>
  )
  :
  null
}

export default Loading
