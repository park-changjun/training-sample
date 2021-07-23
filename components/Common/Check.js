import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Check = ({ content, clickCheck }) => {

  const {id, essential, text, checked} = content ;

  const onClick = () => {
    clickCheck(id);
  }

  return (
    <div className="check-wrapper">
      <input type="checkbox" className="unvisible-box" value={checked}/>
      <div 
        className={`check-box ${checked ? 'active' : ''}`}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <p>{essential ? '[필수]' : '[선택]'}{' '}{text}</p>
      {essential && <button>보기</button>}
    </div>
  )
}

export default Check
