import { Skeleton } from '@heroui/react';
import { FC } from 'react';

type AdditionalFieldProps = {
  additionalFields: number;
};

export const CreateServiceSkeleton: FC<AdditionalFieldProps> = ({ additionalFields }) => (
  <div className='flex h-max w-full flex-col gap-2.5 rounded-2xl bg-foreground p-3.5'>
    <div className='grid h-max w-full auto-rows-max grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-2.5 rounded-xxs bg-primary-20 p-2 text-primary'>
      <div className='flex h-max flex-col gap-2.5'>
        <Skeleton className='h-12 w-full rounded-xxs' />

        <div className='grid grid-rows-[auto_1fr] gap-2.5'>
          <Skeleton className='h-24 w-full rounded-xxs' />
        </div>

        {[...Array(additionalFields)].map((_, index) => (
          <div key={index} className='grid grid-rows-[auto_1fr] gap-2.5'>
            <Skeleton className='h-10 w-full rounded-xxs' />
            <Skeleton className='h-20 w-full rounded-xxs' />
          </div>
        ))}

        <div className='flex h-fit w-fit items-center gap-2'>
          <Skeleton className='h-8 w-20 rounded-xxs' />
        </div>
      </div>

      <div className='flex h-max w-fit flex-col items-center justify-center gap-1'>
        <Skeleton className='h-9 w-9 rounded-xxs' />
        <Skeleton className='h-9 w-9 rounded-xxs' />
        <Skeleton className='h-9 w-9 rounded-xxs' />
        <Skeleton className='h-9 w-9 rounded-xxs' />
      </div>
    </div>
  </div>
);
