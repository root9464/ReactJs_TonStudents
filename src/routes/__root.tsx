import { UserRole } from '@/components/GlobalProvider';
import { MenuBar } from '@components/Menu';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

export const Route = createRootRouteWithContext<{ userRole: UserRole | null }>()({
  component: () => (
    <>
      <Outlet />
      <MenuBar />
    </>
  ),
});
