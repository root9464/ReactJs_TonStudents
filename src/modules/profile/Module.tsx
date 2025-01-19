import { ModuleFlow } from '@/components/layouts/ModuleFlow';
import { useBackButton } from '@/shared/hooks/useBackButton';
import { initDataRaw } from '@telegram-apps/sdk-react';
import { PaidSubscription } from './components/PaidSubscription';
import { ProfileCard } from './components/ProfileCard';
import { ProfileSkeleton } from './components/skeletons/ProfileSkeleton';
import { useAuth } from './hooks/useAuth';

export const ProfileModule = () => {
  useBackButton(true, () => alert('back'));
  const dataRaw = initDataRaw();
  const { data, isSuccess, isLoading, isError } = useAuth(dataRaw ?? '');

  return (
    <ModuleFlow>
      {isLoading && <ProfileSkeleton />}

      {isSuccess && data && <ProfileCard userName={data.data.username} firstName={data.data.username} />}

      {isError && <p>{dataRaw}</p>}
      <PaidSubscription />
    </ModuleFlow>
  );
};
