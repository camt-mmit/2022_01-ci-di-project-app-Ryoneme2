import type { Book } from '../@types/types';

type Props = {
  data: Book;
};

const ListBook = ({ data }: Props) => {
  return (
    <>
      <div className='w-full shadow bg-white px-1 py-2 rounded-full mb-2 grid grid-cols-4 gap-4'>
        <div className='flex justify-center'>{data.isbn}</div>
        <div className='flex justify-center'>{data.title}</div>
        <div className='flex justify-center'>{data.author}</div>
        <div className='flex justify-center'>{data.price}</div>
      </div>
    </>
  );
};

export default ListBook;
