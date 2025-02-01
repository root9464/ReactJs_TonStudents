import { Skeleton } from '@heroui/react';

export const PaginationSkeletons = () => (
  <div className='flex h-max w-full flex-row gap-2.5'>
    {Array.from({ length: 3 }).map((_, index) => (
      <Skeleton key={index} className='h-10 w-10 rounded-xxs' />
    ))}
  </div>
);
