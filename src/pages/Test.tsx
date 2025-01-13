import { useBackButton } from '@/shared/hooks/useBackButton';

export default function TestPage() {
  useBackButton(true);
  return <div>Test</div>;
}
