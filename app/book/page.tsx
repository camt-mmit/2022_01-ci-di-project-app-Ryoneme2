'use client';
import axios, { AxiosError } from 'axios';
import type { ResponseBook } from '../../@types/types';
import ListBook from '../../components/ListBook';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useToken } from '../hooks/tokenStore';

type ErrorType = {
  data: [];
  msg: string;
};

const Page2 = () => {
  const { token } = useToken();
  const fetch = async <T,>(url: string): Promise<T | undefined | ErrorType> => {
    try {
      console.log(token);
      const res = await axios.get<T>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        const cause = e.response?.data.msg || 'internal error';
        const status = e.code;
        return {
          data: [],
          msg: `cause : ${cause}(${status})`,
        };
      }
    }
  };
  const [bookData, setData] = useState<ResponseBook>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch<ResponseBook>('http://localhost:8008/books');
        setData(res);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <>Loading</>;

  if (bookData === undefined)
    return (
      <>
        <p>{'no data'}</p>
      </>
    );
  if (
    bookData.data === undefined ||
    bookData.msg.split(':')[0].replace(/\s/g, '') === 'cause'
  )
    return <p>{bookData.msg}</p>;

  return (
    <>
      <div className='w-full max-w-[35rem]'>
        <ListBook
          key={'header'}
          data={{
            isbn: 'isbn',
            title: 'title',
            author: 'author',
            price: 'price',
          }}
        />
        {bookData.data.map((v) => (
          <ListBook key={v.isbn} data={v} />
        ))}
      </div>
    </>
  );
};

export default Page2;
