import React from 'react'
import axios from 'axios';
import Router from 'next/router'

const API_URL = 'http://localhost:8100/api/posts';

const BigConfirmButton = ({ text, registerForm, isActive }) => {

    if (isActive) {
        return (
            <button className="bigConfirmButton-active" onClick={() => {
                axios({
                    url: API_URL,
                    method: "POST",
                    data: registerForm
                }).then(() => {
                    alert(`${registerForm?.name}님의 회원가입이 완료되었습니다. 새로 가입한 아이디로 로그인해주세요!`)
                }).then(Router.push("/login"))
            }
            }> {text}</button>
        )
    } else {
        return (
            <button className="bigConfirmButton" onClick={() => {
                alert('남은 내용을 더 채워주세요!');
            }}> {text}</button>
        )
    }

}

export default BigConfirmButton;
