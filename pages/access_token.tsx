import { useState } from 'react';

const AccessToken = () => {
  const [token, setToken] = useState<string | null>(
    typeof window !== 'undefined' ? window.localStorage.getItem('token') : ''
  );
  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('token', e.target.value || '');
    }
  };

  return (
    <>
      <input
        type='text'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        placeholder='Access Token'
        onChange={handleType}
        value={token || ''}
        required
      />
    </>
  );
};

export default AccessToken;
