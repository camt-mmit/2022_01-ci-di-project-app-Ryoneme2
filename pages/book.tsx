import axios, { AxiosError } from 'axios';
import type { ResponseBook } from '../@types/types';
import ListBook from '../components/ListBook';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

type ErrorType = {
  data: [];
  msg: string;
};

const Book = () => {
  const fetch = async <T,>(url: string): Promise<T | undefined | ErrorType> => {
    try {
      const token = window.localStorage.getItem('token');
      const res = await axios.get<T>(url, {
        headers: {
          Authorization: `Bearer ${token || ''}`,
        },
      });
      return res.data;
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        const cause = e.response?.data.msg || 'error';
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
        const res = await fetch<ResponseBook>('http://localhost:8082/books');
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
    return <small className='text-red-500 text-center'>{bookData.msg}</small>;

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

export default Book;
