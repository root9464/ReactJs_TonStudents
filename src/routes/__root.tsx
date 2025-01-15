import { Menu } from '@components/Menu';
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Menu />
    </>
  ),
});
