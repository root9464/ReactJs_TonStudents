import { ErrorFlow } from '@/components/layouts/ErrorFlow';
import { ModuleFlow } from '@/components/layouts/ModuleFlow';
import { useBackButton } from '@/shared/hooks/useBackButton';
import { Pagination } from '@heroui/react';
import { useParams } from '@tanstack/react-router';
import { useState } from 'react';
import { ChatCard } from './components/ChatCard';
import { ServiceCard } from './components/ServiceCard';
import { PaginationSkeletons } from './components/skeletons/PaginationSkeletons';
import { ServiceCardSkeleton } from './components/skeletons/ServiceCardSkeleton';
import { useFeeds, useService } from './hooks/useService';

export const FeedsModule = () => {
  useBackButton(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess, isLoading, isError, error } = useFeeds(currentPage);

  return (
    <ModuleFlow className='h-max'>
      {isSuccess && (
        <>
          <ServiceCard items={data.data} />
          <Pagination total={data?.pages ?? 0} page={currentPage} onChange={setCurrentPage} initialPage={currentPage} />
        </>
      )}
      {isLoading && (
        <>
          {Array.from({ length: 3 }).map((_, index) => (
            <ServiceCardSkeleton key={index} />
          ))}
        </>
      )}
      {isLoading && <PaginationSkeletons />}

      {isError && <ErrorFlow message={error?.message} className='flex flex-col gap-2.5' />}
    </ModuleFlow>
  );
};

export const FeedModule = () => {
  useBackButton(true);

  const { id } = useParams({ from: '/store/$id' });

  const { data, isSuccess, isLoading, isError, error } = useService(id);

  return (
    <ModuleFlow>
      {isSuccess && (
        <>
          <ServiceCard items={[data.data]} />
          <ChatCard />
        </>
      )}
      {isLoading && <ServiceCardSkeleton />}
      {isError && <ErrorFlow message={error?.message} className='flex flex-col gap-2.5' />}
    </ModuleFlow>
  );
};
