import { ModuleFlow } from '@/components/layouts/ModuleFlow';
import { useBackButton } from '@/shared/hooks/useBackButton';
import { PaidSubscription } from './components/PaidSubscription';
import { ProfileCard } from './components/ProfileCard';

export const ProfileModule = () => {
  useBackButton(true);

  return (
    <ModuleFlow>
      <ProfileCard />
      <PaidSubscription />
    </ModuleFlow>
  );
};
