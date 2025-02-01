import { UserAtomType } from '@/modules/service/store/UserStore';
import { MenuBar } from '@components/Menu';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

export const Route = createRootRouteWithContext<{ userRole: UserAtomType | null }>()({
  component: () => (
    <>
      <Outlet />
      <MenuBar />
    </>
  ),
});
