import { PageFlow } from '@/components/layouts/PageFlow';
import { ProfileModule } from '@/modules/profile/Module';

export default function AccountPage() {
  return (
    <PageFlow>
      <ProfileModule />
    </PageFlow>
  );
}
