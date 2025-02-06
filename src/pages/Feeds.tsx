import { Header } from '@/components/Header';
import { PageFlow } from '@/components/layouts/PageFlow';
import { FeedModule, FeedsModule } from '@/modules/feeds/Module';

export function FeedsPage() {
  return (
    <PageFlow>
      <Header />
      <FeedsModule />
    </PageFlow>
  );
}

export function FeedPage() {
  return (
    <PageFlow>
      <Header />
      <FeedModule />
    </PageFlow>
  );
}
