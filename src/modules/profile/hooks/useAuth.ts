import { axiosInstance } from '@/shared/lib/axios';
import { validateResult } from '@/shared/utils/utils';
import { useQuery } from '@tanstack/react-query';
import { from, lastValueFrom } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { z } from 'zod';

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
    username: z.string(),
    visibleName: z.string(),
    role: z.string(),
    hash: z.string(),
    infos: UserInfosSchema.optional(),
  }),
  message: z.string(),
  status: z.string(),
});

export type UserDataType = z.infer<typeof UserDataSchema>;

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

export const useAuth = (userId: number, userDataRaw: string) => {
  return useQuery({
    queryKey: ['auth', userId, userDataRaw],
    queryFn: async () => {
      const authObservable = from(
        axiosInstance.post<UserAuthType>('/api/auth/authorize', {
          'init-data-raw': userDataRaw,
        }),
      );
      const combinedDataObservable = authObservable.pipe(
        switchMap((authResponse) => {
          const { token } = validateResult(authResponse.data, UserAuthSchema);
          return from(
            axiosInstance.get<UserDataType>(`/api/user/get-user?id=${userId}`, {
              headers: {
                Authorization: `Bearer ${token.accessToken}`,
              },
            }),
          ).pipe(
            switchMap((userResponse) => {
              const user = validateResult(userResponse.data, UserDataSchema);
              return from(Promise.resolve({ user: { ...user.data }, token }));
            }),
          );
        }),
      );
      return lastValueFrom(combinedDataObservable);
    },
    enabled: !!userId && !!userDataRaw,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
