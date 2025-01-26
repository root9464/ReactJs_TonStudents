import { ModuleFlow } from '@/components/layouts/ModuleFlow';
import { useBackButton } from '@/shared/hooks/useBackButton';
import { ServiceCard } from './components/ServiceCard';

export const FeedsModule = () => {
  useBackButton(true);

  return (
    <ModuleFlow>
      <ServiceCard />
    </ModuleFlow>
  );
};
