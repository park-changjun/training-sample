import React from 'react'

function CheckInput({text, detail}) {
    return (
        <div className="checkInputWrap">
            <input type="checkbox" className="checkInput"/>
            <div className="checkInput-text">{text}<div className="checkInput-detail">{detail}</div></div>
        </div>
    )
}

export default CheckInput;
