import type { Book } from '../@types/types';

type Props = {
  data: Book;
};

const ListBook = ({ data }: Props) => {
  return (
    <>
      <div className='w-full shadow bg-white flex py-3 px-6'>
        <p>{data.isbn}</p>
        <p>{data.title}</p>
        <p>{data.author}</p>
        <p>{data.price}</p>
      </div>
    </>
  );
};

export default ListBook;
