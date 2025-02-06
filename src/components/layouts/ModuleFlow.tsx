import { cn } from '@shared/lib/utils';
import { ReactNode } from '@tanstack/react-router';
import { FC } from 'react';

export const ModuleFlow: FC<{ children: ReactNode; className?: string }> = ({ children, className, ...props }) => (
  <div className={cn(`relative flex h-fit w-full flex-col gap-5 ${className}`)} {...props}>
    {children}
  </div>
);
