'use client';

import { useState } from 'react';
import { useToken } from '../hooks/tokenStore';

const AccToken = () => {
  const { token, setToken } = useToken();
  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
    console.log(token);
  };

  return (
    <>
      <input
        type='text'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        placeholder='Access Token'
        onChange={handleType}
        value={token}
        required
      />
    </>
  );
};

export default AccToken;
