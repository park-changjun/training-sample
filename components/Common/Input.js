import React from 'react'

const Input = ({
  label,
  placeholder,
  verification,
  onChange,
  value,
  name,
  type = 'text',
}) => {
  return (
    <div className="Input" style={{ paddingTop: !label && '10px' }}>
      {label && <label className="label">{label}</label>}
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      {verification && <div className="verification-btn">중복확인</div>}
    </div>
  )
}

export default Input
