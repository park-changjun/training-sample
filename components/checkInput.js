import React from 'react'

const CheckInput = ({ text, detail, setForm, info }) => {

    return (
        <div className="checkInputWrap">
            <input type="checkbox" className="checkInput" onChange={(e) => {
                setForm((prev) => (
                    {
                        ...prev, [info]: e.target?.value
                    }))
            }} />
            <div className="checkInput-text">{text}<div className="checkInput-detail">{detail}</div></div>
        </div>
    )
}

export default CheckInput;
