import { useBackButton } from '@/shared/hooks/useBackButton';

export const TestPage = () => {
  useBackButton(true);
  return <div>Test</div>;
};
