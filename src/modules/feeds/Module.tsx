import { ModuleFlow } from '@/components/layouts/ModuleFlow';
import { useBackButton } from '@/shared/hooks/useBackButton';
import { Pagination } from '@heroui/react';
import { useParams } from '@tanstack/react-router';
import { useState } from 'react';
import { ServiceCard } from './components/ServiceCard';
import { ServiceCardSkeleton } from './components/skeletons/ServiceCardSkeleton';
import { useFeeds, useService } from './hooks/useService';

export const FeedsModule = () => {
  useBackButton(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess, isLoading, isError, error } = useFeeds(currentPage);

  return (
    <ModuleFlow>
      {isSuccess && <ServiceCard items={data.data} />}
      {isLoading && (
        <>
          {Array.from({ length: 3 }).map((_, index) => (
            <ServiceCardSkeleton key={index} />
          ))}
        </>
      )}
      {isError && <p>{error?.message}</p>}

      <Pagination total={data?.pages ?? 0} page={currentPage} onChange={setCurrentPage} />
    </ModuleFlow>
  );
};

export const ServiceModule = () => {
  useBackButton(true);

  const { id } = useParams({ from: '/store/$id' });

  const { data, isSuccess, isLoading, isError, error } = useService(id);

  return (
    <ModuleFlow>
      {isSuccess && <ServiceCard items={[data.data]} />}
      {isLoading && <ServiceCardSkeleton />}
      {isError && <p>{error?.message}</p>}
    </ModuleFlow>
  );
};
