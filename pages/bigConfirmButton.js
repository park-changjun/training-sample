import React from 'react'
import axios from 'axios';

const API_URL = 'http://localhost:8100/api/posts';

const BigConfirmButton = ({ text, registerForm }) => {
    return (
        <button className="bigConfirmButton" onClick={() => {
            axios({
                url: API_URL,
                method: "POST",
                data: registerForm
            }).then(()=>alert(`${registerForm.name}님의 회원가입이 완료되었습니다.`))
        }
    }> {text}</button>
    )
}

export default BigConfirmButton;
