import React from 'react';

export default function Input({ children, name, placeholder, type }) {
  return (
    <input name={name} placeholder={placeholder} type={type}>
      {children}
    </input>
  );
}
