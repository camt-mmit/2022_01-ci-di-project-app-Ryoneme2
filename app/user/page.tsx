'use client';
import axios, { AxiosError } from 'axios';
import ListUser from '../../components/ListUser';
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

const Page = () => {
  const fetch = async <T,>(
    url: string
  ): Promise<T | undefined | ErrorResponse> => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get<T>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (e) {
      console.error(e);
    }
  };

  const [userData, setData] = useState<Response | undefined | ErrorResponse>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch<Response>('http://api-01:9000/users');
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

  if (userData === undefined)
    return (
      <>
        <p>{'no data'}</p>
      </>
    );

  if (userData.statusCode != 200 && isError(userData))
    return <p>{`${userData.error.type} : ${userData.error.description}`}</p>;

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

export default Page;
