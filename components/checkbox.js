import React from 'react';

export default function CheckBox({ item, id, setCheckboxData }) {
  return (
    <div className='checkbox'>
        onClick={() => {
            setCheckboxData((prev) => {
            return prev.map((data) => {
              return data.id === id ? { ...data, essential: !data.essential } : data;
            });
          });
              }}
    </div>
  );
}