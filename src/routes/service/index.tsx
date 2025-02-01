import ServicePage from '@/pages/Service';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/service/')({
  component: ServicePage,
  beforeLoad: async ({ context }) => {
    if (context.userRole !== 'creator') {
      throw redirect({ to: '/account' });
    }
  },
});
