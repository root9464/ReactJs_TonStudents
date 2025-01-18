import { Header } from '@/components/Header';
import { PageFlow } from '@/components/layouts/PageFlow';
import { useBackButton } from '@hooks/useBackButton';
import { NewsModule } from '@modules/news/Module';

export default function MainPage() {
  useBackButton(false);

  return (
    <PageFlow>
      <Header />
      <NewsModule />
    </PageFlow>
  );
}
