import NavLink from '../components/NavLink';

export default function Home() {
  return (
    <>
      <h1 className='text-xl my-2 font-bold'>How to</h1>
      <ol>
        <li>
          1. Select{' '}
          <span className='underline'>
            <NavLink noList={true} link='/access_token' label='Access Token' />
          </span>{' '}
          and fill it
        </li>
        <li>
          2. Click on{' '}
          <span className='underline'>
            <NavLink noList={true} link='/book' label='Book' />
          </span>{' '}
          or{' '}
          <span className='underline'>
            <NavLink noList={true} link='/user' label='User' />
          </span>{' '}
          to view information
        </li>
      </ol>
    </>
  );
}
