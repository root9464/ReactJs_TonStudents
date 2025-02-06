/* eslint-disable @tanstack/query/exhaustive-deps */
import { axiosInstance } from '@/shared/lib/axios';
import { SuccessResponse } from '@/shared/types/zodTypes';
import { validateResult } from '@/shared/utils/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { z } from 'zod';

type AddInfoType = z.infer<typeof SuccessResponse>;

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

      validateResult(data, SuccessResponse);

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

      validateResult(data, SuccessResponse);

      return data;
    },
  });

const UserInfosSchema = z.array(
  z.object({
    userId: z.number(),
    id: z.string(),
    title: z.string(),
    content: z.string(),
  }),
);

const UserDataSchema = z.object({
  data: z.object({
    id: z.number(),
    visibleName: z.string(),
    role: z.string(),
    hash: z.string(),
    infos: UserInfosSchema.optional(),
  }),
  message: z.string(),
  status: z.string(),
});

export type UserDataType = z.infer<typeof UserDataSchema>;

export const useGetUser = (userId: number, accessToken: string) =>
  useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const { data, status, statusText } = await axiosInstance.get<UserDataType>(`/api/user/get-user?id=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (status !== 200) throw new Error(statusText);

      const user = validateResult(data, UserDataSchema);

      return user;
    },
    enabled: !!userId && !!accessToken,
  });

const TokenSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

const UserAuthSchema = z.object({
  message: z.string(),
  status: z.string(),
  token: TokenSchema,
});

export type UserAuthType = z.infer<typeof UserAuthSchema>;

export const useAuth = (userDataRaw: string) =>
  useQuery({
    queryKey: ['auth', userDataRaw],
    queryFn: async () => {
      const { data: UserData } = await axiosInstance.post<UserAuthType>('/api/auth/authorize', {
        'init-data-raw': userDataRaw,
      });
      const { token } = validateResult(UserData, UserAuthSchema);
      return token;
    },

    enabled: !!userDataRaw,

    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: true,
  });
