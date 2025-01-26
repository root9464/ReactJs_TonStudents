import { Header } from '@components/Header';
import { PageFlow } from '@components/layouts/PageFlow';
import { FeedsModule } from '@modules/feeds/Module';

export default function ServicesPage() {
  return (
    <PageFlow>
      <Header />
      <FeedsModule />
      {/* пагинация */}
    </PageFlow>
  );
}
