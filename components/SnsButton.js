import React from 'react';

const SnsButton = ({ src, color }) => {
  return (
    <>
      {src && (
        <div className='button-box' style={{ backgroundColor: color }}>
          <img src={src} alt='' />
        </div>
      )}
    </>
  );
};

export default SnsButton;
