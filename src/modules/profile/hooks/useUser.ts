import { axiosInstance } from '@/shared/lib/axios';
import { validateResult } from '@/shared/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

const AddInfoSchema = z.object({
  message: z.string(),
  status: z.string(),
});

type AddInfoType = z.infer<typeof AddInfoSchema>;

type AddInfoRequest = {
  userId: number;
  title: string;
  content: string;

  accessToken: string;
};

export const useAddInfo = () =>
  useMutation({
    mutationKey: ['addInfo'],
    mutationFn: async ({ userId, title, content, accessToken }: AddInfoRequest) => {
      const { data, status, statusText } = await axiosInstance.post<AddInfoType>(
        '/api/user/add-info',
        {
          userId: userId,
          title: title,
          content: content,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (status !== 200) throw new Error(statusText);

      validateResult(data, AddInfoSchema);

      return data;
    },
  });

type DeleteInfoRequest = {
  infoId: string;
  accessToken: string;
};

export const useDeleteInfo = () =>
  useMutation({
    mutationKey: ['deleteInfo'],
    mutationFn: async ({ infoId, accessToken }: DeleteInfoRequest) => {
      if (!infoId) throw new Error('infoId is required');

      const { data, status, statusText } = await axiosInstance.delete<AddInfoType>(`/api/user/delete-info?id=${infoId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (status !== 200) throw new Error(statusText);

      validateResult(data, AddInfoSchema);

      return data;
    },
  });
