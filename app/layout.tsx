import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <nav
          style={{
            maxWidth: '400px',
            width: '100%',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 0,
              padding: 0,
            }}
          >
            <li className='main-button'>Access token</li>
            <li className='main-button'>User</li>
            <li className='main-button'>Book</li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
