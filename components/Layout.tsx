import React from 'react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center flex-col'>
      <nav className='max-w-[25rem] w-full mb-4'>
        <ul className='list-none flex justify-center items-center m-0 p-0 space-x-4'>
          <li className='text-gray-500 hover:text-gray-700 bg-white shadow hover:shadow-md transition-all cursor-pointer py-2 px-4 rounded-full'>
            <Link href={'/access_token'}>Access token</Link>
          </li>
          <li className='text-gray-500 hover:text-gray-700 bg-white shadow hover:shadow-md transition-all cursor-pointer py-2 px-4 rounded-full'>
            <Link href={'/user'}>User</Link>
          </li>
          <li className='text-gray-500 hover:text-gray-700 bg-white shadow hover:shadow-md transition-all cursor-pointer py-2 px-4 rounded-full'>
            <Link href={'/book'}>Book</Link>
          </li>
        </ul>
      </nav>
      <div className='max-w-[25rem] w-full mb-4'>{children}</div>
    </div>
  );
};

export default Layout;
