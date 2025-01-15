import { PageFlow } from '@components/PageFlow';
import { useBackButton } from '@hooks/useBackButton';

export default function MainPage() {
  useBackButton(false);

  return (
    <PageFlow>
      <div className='h-[500px] bg-blue-300'>ff</div>

      <div className='h-[300px] bg-pink-300'>ff</div>
    </PageFlow>
  );
}
