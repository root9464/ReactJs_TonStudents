import { Skeleton } from '@heroui/react';

export const ProfileSkeleton = () => (
  <div className='relative grid h-fit w-full auto-rows-max gap-4 rounded-2xl bg-foreground p-3.5'>
    <div className='flex h-fit w-full flex-row items-center justify-between'>
      <div className='flex flex-row gap-2'>
        <Skeleton className='h-4 w-32 rounded-md' />
        <Skeleton className='h-4 w-24 rounded-md' />
      </div>
      <Skeleton className='h-12 w-12 rounded-full' />
    </div>

    <div className='grid w-full auto-rows-max gap-4'>
      <div className='flex h-fit w-full flex-col gap-2'>
        <Skeleton className='h-2 w-1/3 rounded-md' />

        <div className='grid grid-cols-[1fr_auto] gap-2'>
          <div className='flex flex-col gap-1'>
            <Skeleton className='h-28 w-full rounded-xxs' />
            <Skeleton className='h-4 w-32 rounded-xxs' />
          </div>

          <div className='flex h-full w-fit flex-col gap-1 justify-self-start'>
            <Skeleton className='h-10 w-10 rounded-xxs' />
            <Skeleton className='h-10 w-10 rounded-xxs' />
          </div>
        </div>
      </div>

      <div className='flex h-fit w-full flex-row justify-start gap-1.5'>
        <Skeleton className='h-8 w-20 rounded-xxs' />
        <Skeleton className='h-8 w-24 rounded-xxs' />
      </div>
    </div>

    <Skeleton className='h-10 w-full rounded-sm' />
  </div>
);
