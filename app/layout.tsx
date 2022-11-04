import '../styles/globals.css';
import NavLink from '../components/NavLink';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navList = [
    {
      label: 'Access Token',
      link: '/access_token',
    },
    {
      label: 'User',
      link: '/user',
    },
    {
      label: 'Book',
      link: '/book',
    },
  ];
  return (
    <html>
      <head></head>
      <body className='w-[100vw] h-[100vh] flex justify-center items-center flex-col bg-gray-100'>
        <nav className='max-w-[25rem] w-full mb-4'>
          <ul className='list-none flex justify-center items-center m-0 p-0 space-x-4'>
            {navList.map((v) => (
              <NavLink key={v.label} link={v.link} label={v.label} />
            ))}
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
