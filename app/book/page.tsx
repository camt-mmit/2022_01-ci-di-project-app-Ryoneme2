import axios from 'axios';
import type { ResponseBook } from '../../@types/types';

const fetch = async (): Promise<ResponseBook | undefined> => {
  const res = await axios.get('http://localhost:8008/books');
  return res.data;
};

const Book = async () => {
  try {
    const bookData = await fetch();
    const error = bookData === undefined || bookData.data === undefined;

    if (error) return <h1>Server Error : Provide undefined data</h1>;

    return <></>;
  } catch (e) {
    console.error(e);
    return (
      <>
        <h1>Book Error</h1>
      </>
    );
  }
};

export default Book;
