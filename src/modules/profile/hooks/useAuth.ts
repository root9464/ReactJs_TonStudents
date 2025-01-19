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

const DataSchema = z.object({
  id: z.number(),
  username: z.string(),
  role: z.string(),
  hash: z.string(),
  infos: z.array(InfoSchema),
});

const UserAuthSchema = z.object({
  data: DataSchema,
  message: z.string(),
  status: z.string(),
  token: TokenSchema,
});

export type UserAuthType = z.infer<typeof UserAuthSchema>;

export const useAuth = (userDataRaw: string) =>
  useQuery({
    queryKey: ['auth', userDataRaw],
    queryFn: async () => {
      const response = await axiosInstance.post<UserAuthType>('/api/auth/authorize', {
        init_data_raw: userDataRaw,
      });
      const { data, token } = validateResult(response, UserAuthSchema);

      return { data, token };
    },

    enabled: !!userDataRaw,

    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: true,
  });
