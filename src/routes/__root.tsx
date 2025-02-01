import { RootLayout } from '@/components/layouts/RootLayout';
import { UserRole } from '@/modules/service/store/UserRoleStore';
import { createRootRouteWithContext } from '@tanstack/react-router';

export const Route = createRootRouteWithContext<{ userRole: UserRole | null }>()({
  component: RootLayout,
});
