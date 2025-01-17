declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;
  export default ReactComponent;
}

/// <reference types="./@types/svg" />
/// <reference types="vite/client" />
