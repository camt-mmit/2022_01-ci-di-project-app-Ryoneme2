import type { Book } from '../@types/types';

type Props = {
  data: Book;
};

const ListBook = ({ data }: Props) => {
  return (
    <>
      <div className='w-full shadow bg-white px-3 py-2 rounded-full mb-2 grid grid-cols-4 gap-4'>
        <div>{data.isbn}</div>
        <div>{data.title}</div>
        <div>{data.author}</div>
        <div>{data.price}</div>
      </div>
    </>
  );
};

export default ListBook;
