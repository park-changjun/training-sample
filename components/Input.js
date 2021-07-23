import React from 'react';

export default function Input({ children, name, placeholder, type, onChange }) {
  return (
    <div className='input-box'>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      >
        {children}
      </input>
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
};
