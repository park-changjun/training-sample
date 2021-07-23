import React from 'react'

const Button = ({text, onClick= () => { console.log('등록된 버튼 함수가 없습니다.')}}) => {
  return (
    <button 
      className="Button"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
