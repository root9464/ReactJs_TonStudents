import { ReactComponent as AccountIco } from '@/assets/svg/accountIcon.svg';
import { ReactComponent as HistoryIco } from '@/assets/svg/historyIcon.svg';
import { ReactComponent as HomeIco } from '@/assets/svg/homeIcon.svg';
import { ReactComponent as OrdersIco } from '@/assets/svg/ordersIcon.svg';
import { ReactComponent as StoreIco } from '@/assets/svg/storeIcon.svg';

import { Link, useLocation } from '@tanstack/react-router';
import { createElement } from 'react';

export const MenuBar = () => {
  const { pathname } = useLocation();

  return (
    <div className='fixed bottom-5 left-1/2 flex h-fit w-max -translate-x-1/2 transform flex-col items-center justify-center gap-2.5 bg-red-400'>
      <SubMenu isVisible={true} pathname={pathname} />
      <Menu pathname={pathname} />
    </div>
  );
};

const MenuPage = [
  { path: '/', name: 'Home', icon: <HomeIco className='h-4 w-4' /> },
  { path: '/account', name: 'Account', icon: <AccountIco className='h-4 w-4' />, type: 'development' },
  { path: '/store', name: 'Store', icon: <StoreIco className='h-4 w-4' />, type: 'development' },
  { path: '/history', name: 'History', icon: <HistoryIco className='h-4 w-4' />, type: 'development' },
  { path: '/test', name: 'Test' },
];

const Menu = ({ pathname }: { pathname: string }) => {
  return (
    <div className='bg-default flex h-[60px] w-max flex-row items-center justify-between gap-1.5 rounded-3xl p-2'>
      {MenuPage.map(({ path, name, icon, type }) => (
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
const SubMenuPage = [
  { path: '/order', name: 'orders', icon: <OrdersIco className='h-4 w-4' />, type: 'development' },
  { path: '/order', name: 'orders', icon: <OrdersIco className='h-4 w-4' />, type: 'development' },
  { path: '/order', name: 'orders', icon: <OrdersIco className='h-4 w-4' />, type: 'development' },
];

const SubMenu = ({ isVisible, pathname }: { isVisible: boolean; pathname: string }) => {
  return (
    <>
      {isVisible && (
        <div className='bg-default flex h-[55px] w-max flex-row items-center justify-between gap-1.5 rounded-3xl p-1.5'>
          {SubMenuPage.map(({ path, name, icon, type }) => (
            <div
              key={path}
              className={`h-full w-[65px] rounded-2xl ${
                pathname === path
                  ? 'bg-primary text-white'
                  : type === 'development'
                    ? 'border-2 border-dashed border-black bg-[#F2E700]'
                    : 'text-secondary'
              }`}>
              <Link
                to={type !== 'development' ? path : ''}
                className='flex h-full w-full flex-col items-center justify-center px-1.5 py-1 text-xs font-semibold'>
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
      )}
    </>
  );
};
