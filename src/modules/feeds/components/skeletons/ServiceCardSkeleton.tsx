import { Skeleton } from '@heroui/react';

export const ServiceCardSkeleton = () => {
  return (
    <div className='flex h-max w-full flex-col gap-2.5 rounded-2xl bg-foreground p-3.5'>
      <div className='grid h-max w-full auto-rows-max grid-rows-[auto_1fr] gap-2.5 rounded-xxs bg-primary-20 p-2 text-primary'>
        <Skeleton className='h-7 w-1/3 rounded-lg' />

        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <Skeleton className='h-8 w-20 rounded-xxs' />
            <Skeleton className='h-8 w-20 rounded-xxs' />
          </div>
          <Skeleton className='h-20 w-full rounded-xxs' />
        </div>

        <div className='flex gap-2'>
          <Skeleton className='h-5 w-12 rounded-xxs' />
          <Skeleton className='h-5 w-12 rounded-xxs' />
        </div>
      </div>

      <div className='grid h-max w-full grid-cols-[auto_1fr_auto] gap-2'>
        <Skeleton className='h-10 w-24 rounded-xxs' />
        <Skeleton className='h-10 w-24 rounded-xxs' />
      </div>
    </div>
  );
};
