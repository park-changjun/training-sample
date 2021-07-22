import React from 'react';

export default function Input({ children, name, placeholder, type }) {
  return (
    <div className='input-box'>
      <input name={name} placeholder={placeholder} type={type}>
        {children}
      </input>
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
};
