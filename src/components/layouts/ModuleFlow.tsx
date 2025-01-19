import { cn } from '@shared/lib/utils';
import { ReactNode } from '@tanstack/react-router';

export const ModuleFlow = ({ children, className, ...props }: { children: ReactNode; className?: string }) => (
  <div className={cn(`relative flex h-fit w-full flex-col gap-5 pb-24 ${className}`)} {...props}>
    {children}
  </div>
);
