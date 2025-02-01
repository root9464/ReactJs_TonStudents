import { axiosInstance } from '@shared/lib/axios';
import { validateResult } from '@shared/utils/utils';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

const ServiceInfosSchema = z.object({
  title: z.string(),
  content: z.string(),
});

const ServiceSettingsSchema = z.object({
  colorHeader: z.string().regex(/^#[0-9a-fA-F]{6}$/, 'Invalid hex color format'),
  buttonText: z.string().nullable(),
  isPrepayment: z.boolean(),
  isDisabled: z.boolean(),
  isAdditionalButton: z.boolean(),
});

const ServiceTagsSchema = z.object({
  content: z.string(),
});

const ServiceSchema = z.object({
  id: z.string(),
  userId: z.number(),
  username: z.string(),
  price: z.number(),
  infos: z.array(ServiceInfosSchema),
  tags: z.array(ServiceTagsSchema).optional(),
  settings: ServiceSettingsSchema,
});

const AllServicesSchema = z.object({
  data: z.array(ServiceSchema),
  message: z.string(),
  status: z.string(),
  pages: z.number(),
  total: z.number(),
});

export type FeedType = z.infer<typeof AllServicesSchema>;
export type ServiceType = z.infer<typeof ServiceSchema>;

const PAGE_SIZE = 3;

export const useFeeds = (page: number) =>
  useQuery({
    queryKey: ['feeds', page],
    queryFn: async () => {
      const { data, status, statusText } = await axiosInstance.get<FeedType>(`/api/creator/service/feed?page=${page}&size=${PAGE_SIZE}`);
      if (status !== 200) throw new Error(statusText);
      return validateResult(data, AllServicesSchema);
    },
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

const GetServiceSchema = z.object({
  data: ServiceSchema,
  message: z.string(),
  status: z.string(),
});

type GetServiceType = z.infer<typeof GetServiceSchema>;

export const useService = (id: string) =>
  useQuery({
    queryKey: ['service', id],
    queryFn: async () => {
      const { data, status, statusText } = await axiosInstance.get<GetServiceType>(`/api/creator/service/get-service?id=${id}`);
      if (status !== 200) throw new Error(statusText);
      return validateResult(data, GetServiceSchema);
    },

    enabled: !!id,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
