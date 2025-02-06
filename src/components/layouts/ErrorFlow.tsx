import { cn } from '@/shared/lib/utils';
import { FC, ReactNode } from 'react';

type ErrorFlowProps = {
  children: ReactNode;
  className: string;
  title: string;
  message: string;
};

export const ErrorFlow: FC<Partial<ErrorFlowProps>> = ({ children, className, title, message, ...props }) => (
  <div className={cn(`h-max w-full rounded-xl bg-foreground p-3.5 ${className}`)} {...props}>
    <div className='flex h-max w-full auto-rows-max flex-col gap-2.5 rounded-xs bg-[#E91E65]/20 p-2 text-[#E91E65]'>
      <p>{title}</p>
      {message ? <p>Ошибка:{message}</p> : children}
      <p>Попробуйте еще раз</p>
    </div>
  </div>
);
