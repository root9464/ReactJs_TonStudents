import ServicePage from '@pages/Service';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/store/$id')({
  component: ServicePage,
});
