import { FeedPage } from '@/pages/Feeds';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/store/$id')({
  component: FeedPage,
});
