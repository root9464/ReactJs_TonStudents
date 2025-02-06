import { OrdersPage } from '@/pages/Services';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/service/orders/')({
  component: OrdersPage,
  beforeLoad: async ({ context }) => {
    if (context.userRole !== 'creator') {
      throw redirect({ to: '/account' });
    }
  },
  wrapInSuspense: true,
  shouldReload: false,
});
