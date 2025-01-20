import { axiosInstance } from '@/shared/lib/axios';
import { validateResult } from '@/shared/utils/utils';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

const InfoSchema = z.object({
  userId: z.number(),
  title: z.string(),
  content: z.string(),
});

const TokenSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

const UserDataSchema = z.object({
  id: z.number(),
  username: z.string(),
  role: z.string(),
  hash: z.string(),
  infos: z.array(InfoSchema).optional().nullable(),
});

const UserAuthSchema = z.object({
  data: UserDataSchema,
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
      const { data, token } = validateResult(UserData, UserAuthSchema);
      return { data, token };
    },

    enabled: !!userDataRaw,

    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: true,
  });
