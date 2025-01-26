import { Skeleton } from '@heroui/react';

export const ProfileSkeleton = () => (
  <div className='relative grid h-fit w-full auto-rows-max gap-4 rounded-5xl bg-foreground p-3.5'>
    <HeaderSkeleton />

    <div className='grid w-full auto-rows-max gap-4'>
      <InformationContainerSkeleton />
      <ButtonsContainerSkeleton />
    </div>

    <div className='flex justify-center'>
      <Skeleton className='h-10 w-full rounded-lg' />
    </div>
  </div>
);

const HeaderSkeleton = () => (
  <div className='flex h-fit w-full flex-row items-center justify-between'>
    <div className='flex flex-col gap-2'>
      <Skeleton className='h-5 w-24 rounded-md' />
      <Skeleton className='h-5 w-24 rounded-md' />
    </div>
    <Skeleton className='h-14 w-14 rounded-full' />
  </div>
);

const InformationContainerSkeleton = () => (
  <div className='flex h-fit w-full flex-col gap-2'>
    <Skeleton className='h-6 w-32 rounded-md' />
    <Skeleton className='h-4 w-full rounded-md' />
    <Skeleton className='h-4 w-full rounded-md' />
    <Skeleton className='h-4 w-full rounded-md' />
  </div>
);

const ButtonsContainerSkeleton = () => (
  <div className='flex h-fit w-full flex-row justify-start gap-1.5'>
    <div className='flex h-fit w-fit flex-row items-center gap-1 rounded-xxs bg-muted-secondary p-2 text-secondary-foreground'>
      <Skeleton className='h-5 w-5 rounded-full' />
      <Skeleton className='h-5 w-8 rounded-md' />
    </div>
    <div className='flex h-fit w-fit flex-row items-center gap-1 rounded-xxs bg-muted-secondary p-2 text-secondary-foreground'>
      <Skeleton className='h-5 w-5 rounded-full' />
      <Skeleton className='h-5 w-12 rounded-md' />
    </div>
  </div>
);
