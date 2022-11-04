import axios, { AxiosError } from 'axios';
import type { ResponseBook } from '../../@types/types';
import ListBook from '../../components/ListBook';

const fetch = async (): Promise<ResponseBook | undefined> => {
  const res = await axios.get('http://localhost:8008/books', {
    headers: {
      Authorization: 'Bearer spicy_token',
    },
  });
  return res.data;
};

const Book = async () => {
  try {
    const bookData = await fetch();

    if (bookData === undefined || bookData.data === undefined)
      return <h1>Server Error : Provide undefined data</h1>;

    return (
      <>
        <div className='w-full max-w-[30rem]'>
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
  } catch (e) {
    console.error(e);
    if (e instanceof AxiosError) {
      const cause = e.response?.data.msg || 'internal error';
      return (
        <>
          <h1>Book Error</h1>
          <small className='text-red-500'>cause : {cause}</small>
        </>
      );
    }
    return (
      <>
        <h1>Book Error</h1>
        <small>cause : internal error no clue</small>
      </>
    );
  }
};

export default Book;
