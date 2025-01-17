import { ReactComponent as AccountIco } from '@/assets/svg/accountIcon.svg';
import { ReactComponent as HistoryIco } from '@/assets/svg/historyIcon.svg';
import { ReactComponent as HomeIco } from '@/assets/svg/homeIcon.svg';
import { ReactComponent as StoreIco } from '@/assets/svg/storeIcon.svg';
import { Link, useLocation } from '@tanstack/react-router';
import { createElement } from 'react';

const Pages = [
  { path: '/', name: 'Home', icon: <HomeIco className='h-4 w-4' /> },
  { path: '/account', name: 'Account', icon: <AccountIco className='h-4 w-4' />, type: 'development' },
  { path: '/store', name: 'Store', icon: <StoreIco className='h-4 w-4' />, type: 'development' },
  { path: '/history', name: 'History', icon: <HistoryIco className='h-4 w-4' />, type: 'development' },
  { path: '/test', name: 'Test' },
];

export const Menu = () => {
  const { pathname } = useLocation();
  return (
    <div className='fixed bottom-5 left-1/2 flex h-[60px] w-[calc(100%-40px)] -translate-x-1/2 transform flex-row items-center justify-between rounded-3xl bg-white p-2'>
      {Pages.map(({ path, name, icon, type }) => (
        <div
          key={path}
          className={`h-full w-[65px] rounded-2xl ${
            pathname === path ? 'bg-primary text-white' : type === 'development' ? 'border-2 border-dashed border-black bg-[#F2E700]' : 'text-secondary'
          }`}>
          <Link
            to={type !== 'development' ? path : ''}
            className='flex h-full w-full flex-col items-center justify-center px-2 py-1 text-xs font-semibold'>
            {icon &&
              createElement(icon.type, {
                className: `${
                  path === '/history' ? (pathname === path ? 'fill-white' : 'fill-secondary') : pathname === path ? 'stroke-white' : 'stroke-secondary'
                }`,
              })}
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
};
