import { createRootRouteWithContext } from '@tanstack/react-router';

type MyRouterContext = {
  userData: {
    id: number;
    role: string;
  } | null;
};

export const rootRoute = createRootRouteWithContext<MyRouterContext>()();
