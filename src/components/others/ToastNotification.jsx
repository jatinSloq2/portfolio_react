import React from 'react';

const CustomToast = ({ message, type }) => {
  // const isSuccess = type === 'success';

  return (
    <>
      <span className="text-md font-bold">{message}</span>
    </>
  );
};

export default CustomToast;
