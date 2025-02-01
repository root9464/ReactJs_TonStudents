import { ModuleFlow } from '@/components/layouts/ModuleFlow';
import { useBackButton } from '@/shared/hooks/useBackButton';
import { PaidSubscription } from './components/PaidSubscription';

export const PaymentModule = () => {
  useBackButton(true);

  return (
    <ModuleFlow>
      <PaidSubscription />
    </ModuleFlow>
  );
};
