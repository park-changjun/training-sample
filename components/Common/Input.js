import React from 'react'

const Input = ({label, placeholder}) => {
  return (
    <div className="Input">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        />
    </div>
  )
}

export default Input
