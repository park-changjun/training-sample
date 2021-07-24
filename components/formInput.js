import axios from 'axios';
import React from 'react';
const API_URL = 'http://localhost:8100/api/posts';

const FormInput = ({ text, btnText, setForm, info, registerForm, setIsConfirm, setIsEqual }) => {
    const emailOk = () => {
        alert('사용할 수 있는 이메일입니다!');
        setIsConfirm(true);
    }
    if (btnText) {
        return (
            <div className="form-input-component">
                <input placeholder={text} onChange={(e) => {
                    setForm((prev) => (
                        {
                            ...prev, [info]: e.target?.value
                        }))
                }} />
                <button onClick={() => {
                    axios({ url: API_URL, method: 'GET' })
                        .then(({ data }) => {
                            data.filter(member => member?.email === registerForm?.email).length
                                ? alert('사용할 수 없는 이메일입니다. 다른 이메일을 사용해주세요.')
                                : emailOk()
                        }
                        )
                }
                } >{btnText}</button>
            </div>
        )
    } else {
        return (
            <div className="form-input-component">
                {setIsEqual
                    ? <input placeholder={text} onChange={(e) => {
                        e.target?.value === registerForm?.password ? setIsEqual(true) : setIsEqual(false)
                    }} /> :
                    <input placeholder={text} onChange={(e) => {
                        setForm((prev) => (
                            {
                                ...prev, [info]: e.target?.value
                            }))
                    }} />

                }

            </div>
        )
    }

};

export default FormInput;