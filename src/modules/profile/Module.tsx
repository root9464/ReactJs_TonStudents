import { ModuleFlow } from '@/components/layouts/ModuleFlow';
import { useBackButton } from '@/shared/hooks/useBackButton';

export const ProfileModule = () => {
  useBackButton(true, () => alert('back'));
  return (
    <ModuleFlow>
      <div className='rounded-5xl w-full bg-foreground'></div>
    </ModuleFlow>
  );
};
