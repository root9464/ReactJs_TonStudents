import { axiosInstance } from '@/shared/lib/axios';
import { useMutation } from '@tanstack/react-query';

type PaymentRequest = {
  userId: number;
  accessToken: string;
};

export const usePayment = () =>
  useMutation({
    mutationKey: ['payment'],
    mutationFn: async ({ userId, accessToken }: PaymentRequest) => {
      const { data, status, statusText } = await axiosInstance.get(`/api/bot/payment?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (status !== 200) throw new Error(statusText);

      return data;
    },
  });
