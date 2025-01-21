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
};

export const useAddInfo = (refetch: () => void) =>
  useMutation({
    mutationKey: ['addInfo'],
    mutationFn: async ({ userId, title, content }: AddInfoRequest) => {
      const { data, status, statusText } = await axiosInstance.post<AddInfoType>('/api/user/add-info', {
        userId: userId,
        title: title,
        content: content,
      });

      if (status !== 200) throw new Error(statusText);

      validateResult(data, AddInfoSchema);

      return data;
    },

    onSuccess: (data) => {
      if (data.status === 'success') refetch();
    },
  });
