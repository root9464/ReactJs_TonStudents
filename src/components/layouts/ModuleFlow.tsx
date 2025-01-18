import { cn } from '@shared/lib/utils';
import { ReactNode } from '@tanstack/react-router';

export const ModuleFlow = ({ children, className, ...props }: { children: ReactNode; className?: string }) => (
  <div className={cn(`relative h-fit w-full ${className}`)} {...props}>
    {children}
  </div>
);
