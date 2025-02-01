/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import '@/index.css';
import { UserAtom } from '@/modules/service/store/UserStore';
import { routeTree } from '@/routeTree.gen';
import { useClientOnce } from '@/shared/hooks/useClientOnce';
import { useTelegramMock } from '@/shared/hooks/useTelegramMock';
import { init } from '@/shared/lib/initTma';
import { HeroUIProvider } from '@heroui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { useAtom } from 'jotai';
import { createContext, useEffect, useState } from 'react';

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

const router = createRouter({
  routeTree,
  context: {
    userRole: null,
  },
});
const queryClient = new QueryClient();

export const GlobalProvider = ({ defaultTheme = 'light', storageKey = 'vite-ui-theme', ...props }: ThemeProviderProps) => {
  const isDev = import.meta.env.DEV;
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);
  const [user] = useAtom(UserAtom);

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
    <TonConnectUIProvider manifestUrl={'https://taiga-labs.github.io/gorelko.json'}>
      <ThemeProviderContext.Provider {...props} value={themeContextValue}>
        <HeroUIProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider
              router={router}
              context={{
                userRole: user,
              }}
            />

            {isDev && (
              <>
                <ReactQueryDevtools initialIsOpen={false} />
                <TanStackRouterDevtools router={router} />
              </>
            )}
          </QueryClientProvider>
        </HeroUIProvider>
      </ThemeProviderContext.Provider>
    </TonConnectUIProvider>
  );
};
