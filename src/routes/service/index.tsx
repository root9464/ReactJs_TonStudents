import { UserRole } from '@/components/GlobalProvider';
import { createFileRoute, redirect, useMatch } from '@tanstack/react-router';

const USER_ROLE: (UserRole | null)[] = ['creator', 'moderator', 'administarator'];

export const Route = createFileRoute('/service/')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (!USER_ROLE.includes(context.userRole)) {
      throw redirect({ to: '/account' });
    }
  },
});

function RouteComponent() {
  const {
    context: { userRole: role },
  } = useMatch({ from: '/service/' });
  return (
    <>
      <p>fff</p>
      <p>{role}</p>
    </>
  );
}
