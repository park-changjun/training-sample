import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Router from 'next/router'
const API_URL = 'http://localhost:8100/api/posts';


const BigConfirmButtonLogin = ({ text, loginForm, isActive }) => {

    if (isActive) {
        return (
            <button className="bigConfirmButton-active" onClick={() => {
                axios({ url: API_URL, method: 'GET' })
                    .then(({ data }) =>  { data.filter(member => member.email === loginForm.email && member.password === loginForm.password).length 
                        ? alert("환영합니다!")
                        : alert("로그인 정보가 일치하지 않습니다.") }
                    )
            }
            }> {text}</button>
        )
    } else {
        return (<button className="bigConfirmButton" onClick={
            () => { alert('남은 내용을 더 채워주세요!') }
        }> {text}</button>
        )
    }
};

// 서버에 POST로 보내기
// const BigConfirmButtonLogin = ({ text, loginForm, memberList}) => {
//     return (
//         <button className="bigConfirmButton" onClick={() => {
//             axios({
//                 url: API_URL,
//                 method: "POST",
//                 data: loginForm
//             }).then(()=>alert(`서버에 비교를 요청한 결과!`))
//         }
//     }> {text}</button>
//     )
// };

export default BigConfirmButtonLogin;

