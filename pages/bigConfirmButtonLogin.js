import React from 'react'
import axios from 'axios';

const API_URL = 'http://localhost:8100/api/posts';

// const BigConfirmButtonLogin = ({ text, loginForm, memberList}) => {
//     return (
//         <button className="bigConfirmButton" onClick={() => {
//             axios({
//                 url: API_URL,
//                 method: "POST",
//                 data: loginForm
//             }).then(()=>alert(`비교해서 결과 출력.`))
//         }
//     }> {text}</button>
//     )
// };

const BigConfirmButtonLogin = ({ text, loginForm, memberList}) => {
    return (
        <button className="bigConfirmButton" onClick={() => {
            memberList.forEach(
                (member)=>{
                    if(member.email === loginForm.email){
                        console.log('로그인 처리!');
                    }
                }
                )
        }
    }> {text}</button>
    )
};

export default BigConfirmButtonLogin;
