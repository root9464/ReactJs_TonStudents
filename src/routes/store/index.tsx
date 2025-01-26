import ServicesPage from '@pages/Services'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/store/')({
  component: ServicesPage,
})
