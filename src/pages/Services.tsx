import { CreateServiceModule, ServicesModule } from '@/modules/service/Module';
import { Header } from '@components/Header';
import { PageFlow } from '@components/layouts/PageFlow';
import { Button } from '@heroui/react';

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
      <Button className='h-10 w-fit rounded-xs bg-primary px-3 py-2 text-base font-medium text-white'>orders</Button>
    </PageFlow>
  );
}
