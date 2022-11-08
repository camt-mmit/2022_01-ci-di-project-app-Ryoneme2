import axios, { AxiosError } from 'axios';
import type { ResponseBook } from '../@types/types';
import ListUser from '../components/ListUser';
import { useEffect, useState } from 'react';

type Response = {
  statusCode: number;
  data: User[];
};
type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
};
type ErrorResponse = {
  statusCode: number;
  error: {
    type: string;
    description: string;
  };
};

const isError = (animal: Response | ErrorResponse): animal is ErrorResponse => {
  let res_ = (animal as ErrorResponse).error !== undefined;
  return res_;
};
const Book = () => {
  const fetch = async <T,>(
    url: string
  ): Promise<T | undefined | ErrorResponse> => {
    try {
      const token = window.localStorage.getItem('token');
      const res = await axios.get<T>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        return e.response?.data;
      }
    }
  };

  const [userData, setData] = useState<Response | undefined | ErrorResponse>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch<Response>('http://localhost:8081/users');
        console.log(res);
        setData(res);
      } catch (e) {
        console.error(e);
        if (e instanceof AxiosError) {
          setData(e.response?.data);
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading)
    return (
      <>
        <div className='animate-spin'>Loading</div>
      </>
    );

  if (userData === undefined)
    return (
      <>
        <small className='text-red-500'>no data</small>
      </>
    );

  if (userData.statusCode != 200 && isError(userData))
    return (
      <small className='text-red-500 text-center'>{`${userData.error.type} : ${userData.error.description}`}</small>
    );

  if (!isError(userData))
    return (
      <>
        <div className='w-full max-w-[35rem]'>
          <ListUser
            key={'header'}
            data={{
              id: 'id',
              username: 'username',
              firstName: 'first name',
              lastName: 'last name',
            }}
          />
          {userData.data.map((v) => (
            <ListUser key={v.id} data={v} />
          ))}
        </div>
      </>
    );
};

export default Book;
