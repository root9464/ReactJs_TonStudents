import TestPage from '@/pages/Test'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test/')({
  component: TestPage,
})
