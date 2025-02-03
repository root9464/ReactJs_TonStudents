import { axiosInstance } from '@/shared/lib/axios';
import { SuccessResponse } from '@/shared/types/zodTypes';
import { validateResult } from '@/shared/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

type CreateServiceType = z.infer<typeof SuccessResponse>;

type CreateServiceRequest = {
  userId: number;
  price: number;
  infos: Array<{ title: string; content: string }>;
  settings: Settings;
};

type Settings = {
  colorHeader: string;
  isPrepayment: boolean;
  isDisabled: boolean;
  isAdditionalButton: boolean;
};

export const useCreateService = () =>
  useMutation({
    mutationKey: ['createService'],
    mutationFn: async ({ service, accessToken }: { service: CreateServiceRequest } & { accessToken: string }) => {
      const { data, status, statusText } = await axiosInstance.post<CreateServiceType>('/api/creator/service/create', service, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (status !== 200) throw new Error(statusText);

      return validateResult(data, SuccessResponse);
    },
  });
