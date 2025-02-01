import { Outlet } from '@tanstack/react-router';
import { MenuBar } from '../Menu';

export const RootLayout = () => {
  return (
    <>
      <Outlet />
      <MenuBar />
    </>
  );
};
