/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import '@/index.css';
import { routeTree } from '@/routeTree.gen';
import { useClientOnce } from '@/shared/hooks/useClientOnce';
import { useTelegramMock } from '@/shared/hooks/useTelegramMock';
import { init } from '@/shared/lib/initTma';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { createContext, useEffect, useState } from 'react';
import { TanStackRouterDevtools } from './../../node_modules/@tanstack/router-devtools/src/devtools';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

export const GlobalProvider = ({ defaultTheme = 'light', storageKey = 'vite-ui-theme', ...props }: ThemeProviderProps) => {
  const isDev = import.meta.env.DEV;
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

  if (isDev) useTelegramMock();
  useClientOnce(async () => init(true));

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const themeContextValue = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={themeContextValue}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />

        {false && (
          <>
            <ReactQueryDevtools initialIsOpen={false} />
            <TanStackRouterDevtools router={router} />
          </>
        )}
      </QueryClientProvider>
    </ThemeProviderContext.Provider>
  );
};
