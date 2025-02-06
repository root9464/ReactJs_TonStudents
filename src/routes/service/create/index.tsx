import { CreateServicePage } from '@/pages/Services';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/service/create/')({
  component: CreateServicePage,
});
