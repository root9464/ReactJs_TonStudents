import { createFileRoute, redirect, useMatch } from '@tanstack/react-router';

export const Route = createFileRoute('/service/')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (context.userRole !== 'creator') {
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
