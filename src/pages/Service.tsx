import { Header } from '@components/Header';
import { PageFlow } from '@components/layouts/PageFlow';
import { ServiceModule } from '@modules/feeds/Module';

export default function ServicePage() {
  return (
    <PageFlow>
      <Header />
      <ServiceModule />
    </PageFlow>
  );
}
