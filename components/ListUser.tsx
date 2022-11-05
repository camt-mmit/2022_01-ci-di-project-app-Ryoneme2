type User = {
  id: number | string;
  username: string;
  firstName: string;
  lastName: string;
};

type Props = {
  data: User;
};

const ListBook = ({ data }: Props) => {
  return (
    <>
      <div className='w-full shadow bg-white px-1 py-2 rounded-full mb-2 grid grid-cols-4 gap-4'>
        <div className='flex justify-center'>{data.id}</div>
        <div className='flex justify-center'>{data.username}</div>
        <div className='flex justify-center'>{data.firstName}</div>
        <div className='flex justify-center'>{data.lastName}</div>
      </div>
    </>
  );
};

export default ListBook;
