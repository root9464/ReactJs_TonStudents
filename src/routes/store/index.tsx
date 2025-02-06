import { FeedsPage } from '@/pages/Feeds';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/store/')({
  component: FeedsPage,
});
