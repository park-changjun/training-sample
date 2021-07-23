import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Router from 'next/router'
const API_URL = 'http://localhost:8100/api/posts';

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

const BigConfirmButtonLogin = ({ text, loginForm, isActive }) => {
    const [memberList, setMemberList] = useState([]);
    if(isActive){
        return (
            <button className="bigConfirmButton-active" onClick={() => {
                axios({ url: API_URL, method: 'GET' })
                    .then(({ data }) => setMemberList(data)).then(
                        memberList.filter(member => member.email === loginForm.email && member.password === loginForm.password).length ? alert("로그인!") : alert("로그인 정보가 일치하지 않습니다.")
                    )
            }
            }> {text}</button>
        )
    }else{
        return (<button className="bigConfirmButton" onClick={
            ()=> {alert('남은 내용을 더 채워주세요!')}
        }> {text}</button>
        )
    }
};

export default BigConfirmButtonLogin;