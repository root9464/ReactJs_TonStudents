import { PageFlow } from '@/components/layouts/PageFlow';
import { useBackButton } from '@/shared/hooks/useBackButton';

export default function TestPage() {
  useBackButton(true);
  return (
    <PageFlow>
      <h1 className='text-2xl'>test</h1>
    </PageFlow>
  );
}
