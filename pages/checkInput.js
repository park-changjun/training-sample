import React from 'react'

function CheckInput({text}) {
    return (
        <div className="checkInputWrap">
            <input type="checkbox" className="checkInput"/>
            <div>{text}</div>
        </div>
    )
}

export default CheckInput;
