import { cn } from '@/shared/lib/utils';
import { ReactNode } from '@tanstack/react-router';

/*
  достижение sticky scroll чтобы он не выходил за пределы контейнера tma safe area

  <div className={cn(`w-full flex flex-col h-screen fixed bg-blue-200 overflow-hidden ${className}`)} {...props}>
    <div className='flex-1 bg-slate-700 overflow-scroll'>{children}</div>
  </div>
*/

export const PageFlow = ({ children, className, ...props }: { children: ReactNode; className?: string }) => {
  return (
    <>
      <div className='safe-area' />
      <div className={cn(`relative flex h-full w-full flex-col bg-background px-1 ${className}`)} {...props}>
        <div className='flex-1 bg-slate-700 py-5 pb-24'>{children}</div>
      </div>
    </>
  );
};
