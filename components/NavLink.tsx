import Link from 'next/link';

const NavLink = ({
  link,
  label,
  noList = false,
}: {
  link: string;
  label: string;
  noList?: boolean;
}) => {
  if (!noList) {
    return (
      <li>
        <Link
          className='text-gray-500 hover:text-gray-700 bg-white shadow hover:shadow-md transition-all cursor-pointer py-2 px-4 rounded-full'
          href={link}
        >
          {label}
        </Link>
      </li>
    );
  }

  return <Link href={link}>{label}</Link>;
};

export default NavLink;
