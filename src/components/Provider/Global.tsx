import { routeTree } from '@/routeTree.gen';
import { useClientOnce } from '@/shared/hooks/useClientOnce';
import { init } from '@/shared/lib/initTma';
import '@/shared/utils/telegramMock';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from './Theme';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

export const GlobalProvider = () => {
  useClientOnce(async () => {
    init(true);
  });

  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
