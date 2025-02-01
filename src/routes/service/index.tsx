import { UserAtom } from '@/modules/service/store/UserStore';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { useAtom } from 'jotai';

export const Route = createFileRoute('/service/')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (context.userRole !== 'creator') {
      throw redirect({ to: '/account' });
    }
  },
});

function RouteComponent() {
  const [role] = useAtom(UserAtom);

  return (
    <>
      <p>fff</p>
      <p>{role}</p>
    </>
  );
}
