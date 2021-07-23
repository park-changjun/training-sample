import React from 'react';

const FormInput = ({text, btnText, setForm, info}) => {
    if(btnText){
        return (
            <div className="form-input-component">
                <input placeholder={text} onChange={(e) => { 
                    setForm((prev) => (
                        { ...prev, [info]: e.target.value 
                        })) }}/>
                <button >{btnText}</button>
            </div>
        )
    }else{
        return (
            <div className="form-input-component">
                <input placeholder={text} onChange={(e) => { 
                    setForm((prev) => (
                        { ...prev, [info]: e.target.value 
                        })) }}/>
            </div>
        )
    }
    
};

export default FormInput;