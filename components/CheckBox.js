import React from 'react';
import { IoIosCheckboxOutline } from 'react-icons/io';

export default function CheckBox({ item, id, setCheckBoxInfo }) {
  return (
    <div className='checkbox'>
      <IoIosCheckboxOutline
        className='check'
        color={item.active ? '#efcf34' : '#dbdbdb'}
        size='24'
        onClick={() => {
          setCheckBoxInfo((prev) => {
            return prev.map((data) => {
              return data.id === id ? { ...data, active: !data.active } : data;
            });
          });
        }}
      />
      <div className='lists'>
        <span className='list'>
          [{item.option ? '선택' : '필수'}]{item.list}
        </span>
        {item.needDetail && <span className='detail'>보기</span>}
      </div>
    </div>
  );
}
