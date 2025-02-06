import { CreateServiceModule, ServicesModule } from '@/modules/service/Module';
import { Header } from '@components/Header';
import { PageFlow } from '@components/layouts/PageFlow';

export function CreateServicePage() {
  return (
    <PageFlow>
      <Header />
      <CreateServiceModule />
    </PageFlow>
  );
}

export function ServicesPage() {
  return (
    <PageFlow>
      <Header />
      <ServicesModule />
    </PageFlow>
  );
}

export function OrdersPage() {
  return (
    <PageFlow>
      <Header />
      <p>orders</p>
    </PageFlow>
  );
}
