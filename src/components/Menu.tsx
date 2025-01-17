import TestIcon from '@/assets/svg/Group 1597882766.svg';
import { Link, useLocation } from '@tanstack/react-router';
const Pages = [
  { path: '/', name: 'Home' },
  { path: '/account', name: 'Account' },
  { path: '/store', name: 'Store' },
  { path: '/history', name: 'History' },
  { path: '/test', name: 'Test' },
];

export const Menu = () => {
  const { pathname } = useLocation();
  return (
    <div className='fixed bottom-5 left-1/2 flex h-[60px] w-[calc(100%-40px)] -translate-x-1/2 transform flex-row items-center justify-between rounded-3xl bg-white p-2'>
      {Pages.map(({ path, name }) => (
        <div key={path} className={`h-full w-[60px] rounded-2xl ${pathname === path ? 'bg-primary text-white' : null}`}>
          <Link to={path} className='flex h-full w-full flex-col items-center justify-center text-xs font-semibold'>
            <TestIcon />
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
};
