import { PageFlow } from '@components/layouts/PageFlow';
import { PaymentModule } from '@modules/payment/Module';
import { ProfileModule } from '@modules/profile/Module';

export default function AccountPage() {
  return (
    <PageFlow>
      <ProfileModule />
      <PaymentModule />
    </PageFlow>
  );
}
