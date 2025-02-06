import { ReactComponent as Notifications } from '@/assets/svg/notificationsIcon.svg';
import { ReactComponent as Change } from '@/assets/svg/penIcon.svg';
import { ReactComponent as Save } from '@/assets/svg/saveIcon.svg';
import { ReactComponent as Clear } from '@/assets/svg/xIcon.svg';

import { ConnectWalletButton } from '../widgets/ConnetWalletButton';

import { ReactComponent as Basket } from '@/assets/svg/basketIcon.svg';
import { ErrorFlow } from '@/components/layouts/ErrorFlow';
import { UserRole, UserRoleAtom } from '@/modules/service/store/UserRoleStore';
import { useQueryClient } from '@tanstack/react-query';
import { useLaunchParams } from '@telegram-apps/sdk-react';
import { useAtom } from 'jotai';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAddInfo, useAuth, useDeleteInfo, useGetUser } from '../hooks/useUser';
import { ProfileSkeleton } from './skeletons/ProfileSkeleton';

export const ProfileCard = () => {
  const { initDataRaw, initData } = useLaunchParams();
  const { data: AuthorizeData, isLoading } = useAuth(initDataRaw ?? '');
  const {
    data: UserData,
    isSuccess,
    isLoading: isLoadingUser,
    isError,
    error,
    refetch,
  } = useGetUser(initData?.user?.id ?? 0, AuthorizeData?.accessToken ?? '');

  const [, setRole] = useAtom(UserRoleAtom);
  useEffect(() => {
    if (UserData && isSuccess) {
      setRole(UserData.data.role as UserRole);
    }
  }, [UserData, isSuccess, setRole]);

  return (
    <>
      {AuthorizeData && (
        <div className='relative grid h-fit w-full auto-rows-max gap-4 rounded-2xl bg-foreground p-3.5'>
          <Header userName={initData?.user?.username ?? ''} firstName={initData?.user?.firstName ?? ''} />

          <div className='grid w-full auto-rows-max gap-4'>
            {UserData?.data.infos && UserData?.data.infos?.[0]?.id && isSuccess ? (
              <InformationContainer
                id={UserData?.data.infos[0].id}
                title={UserData?.data.infos?.[0]?.title}
                description={UserData?.data.infos?.[0]?.content}
                refetch={refetch}
              />
            ) : (
              <FormInformation />
            )}
            <ButtonsContainer />
          </div>

          <ConnectWalletButton />
        </div>
      )}

      {(isLoading || isLoadingUser) && <ProfileSkeleton />}
      {isError && <ErrorFlow message={error?.message} className='flex flex-col gap-2.5' />}
    </>
  );
};

const Header: FC<{ userName: string; firstName: string }> = ({ userName, firstName }) => (
  <div className='flex h-fit w-full flex-row items-center justify-between'>
    <div className='flex flex-row gap-2'>
      <h2 className='text-lg font-medium'>@{userName} |</h2>
      <h2 className='text-lg font-medium'>{firstName}</h2>
    </div>
    <div className='h-12 w-12 rounded-full bg-lime-300' />
  </div>
);

type InformationContainerProps = {
  id: string;
  title: string;
  description: string;
  refetch: () => void;
};

const InformationContainer: FC<InformationContainerProps> = ({ id, title, description }) => {
  const queryClient = useQueryClient();
  const { initData, initDataRaw } = useLaunchParams();

  const { data, isSuccess, mutate } = useDeleteInfo();

  const cachedAuthData: { accessToken: string; refreshToken: string } | undefined = queryClient.getQueryData(['auth', initDataRaw]);

  if (isSuccess && data) {
    console.log('deleted', data);
    queryClient.refetchQueries({ queryKey: ['user', initData?.user?.id] });
  }

  return (
    <div className='grid h-fit w-full grid-cols-[1fr_auto] gap-2'>
      <div className='flex w-full flex-col gap-2'>
        <h2 className='text-xl font-medium text-muted opacity-60'>{title}</h2>
        <p className='w-full break-all text-base font-medium'>{description}</p>
      </div>
      <div className='flex h-full w-fit flex-col gap-1 justify-self-start'>
        <button className='h-fit w-fit rounded-xxs bg-muted-secondary p-2'>
          <Change className='h-5 w-5 stroke-secondary-foreground stroke-[1.2]' />
        </button>

        <button
          onClick={() => mutate({ infoId: id, accessToken: cachedAuthData?.accessToken ?? '' })}
          className='h-fit w-fit rounded-xxs bg-[#E91E65] p-2 text-white'>
          <Clear className='h-5 w-5 fill-foreground stroke-[1.2]' />
        </button>
      </div>
    </div>
  );
};

const ButtonsContainer = () => (
  <div className='flex h-fit w-full flex-row justify-start gap-1.5'>
    <div className='flex h-fit w-fit flex-row items-center gap-1 rounded-xxs bg-muted-secondary p-2 text-secondary'>
      <Notifications className='h-fit w-fit stroke-secondary stroke-[1.2]' />
      <p className=''>5</p>
    </div>
    <div className='flex h-fit w-fit flex-row items-center gap-1 rounded-xxs bg-muted-secondary p-2 text-secondary'>
      <Basket className='h-fit w-full stroke-secondary stroke-[1.2]' />
      <p className=''>Заказы</p>
    </div>
  </div>
);

type FormInformation = {
  title: string;
  content: string;
};

const FormInformation = () => {
  const { formState, register, handleSubmit, reset } = useForm<FormInformation>({
    defaultValues: {
      title: '',
      content: '',
    },
    mode: 'onChange',
  });
  const { initData, initDataRaw } = useLaunchParams();
  const { data, mutate, isSuccess } = useAddInfo();
  const queryClient = useQueryClient();
  const cachedAuthData: { accessToken: string; refreshToken: string } | undefined = queryClient.getQueryData(['auth', initDataRaw]);

  const onSubmit = ({ title, content }: FormInformation) => {
    if (initData) mutate({ userId: initData.user?.id ?? 0, title, content, accessToken: cachedAuthData?.accessToken ?? '' });
  };

  if (isSuccess && data) {
    queryClient.refetchQueries({ queryKey: ['user', initData?.user?.id] });
  }

  return (
    <div className='flex h-fit w-full flex-col gap-2'>
      <input
        className={`h-10 w-full p-2.5 text-xl font-medium opacity-60 outline-none ${
          formState.errors.title ? 'text-[#E91E65] placeholder:text-[#E91E65]' : 'text-muted placeholder:text-muted'
        }`}
        placeholder='Название информации'
        {...register('title', {
          required: 'Это поле обязательно для заполнения',
          maxLength: {
            value: 24,
            message: 'Максимальная длина текста — 25 символов',
          },
        })}
      />

      <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-[1fr_auto] gap-2'>
        <div className='flex flex-col gap-1'>
          <textarea
            className={`h-28 w-full rounded-xxs p-2.5 text-secondary-foreground outline-none ${
              formState.errors.content ? 'border-2 border-[#E91E65] bg-[#E91E65]/10' : 'bg-muted-secondary'
            }`}
            placeholder='Данное поле будет по умолчанию отображаться в профиле'
            {...register('content', {
              required: 'Это поле обязательно для заполнения',
              maxLength: {
                value: 500,
                message: 'Максимальная длина текста — 500 символов',
              },
            })}
          />

          {formState.errors.content && <span className='text-sm text-[#E91E65]'>{formState.errors.content.message}</span>}
        </div>

        <div className='flex h-full w-fit flex-col gap-1 justify-self-start'>
          <button type='submit' className='h-fit w-fit rounded-xxs bg-primary p-2 text-white'>
            <Save className='h-5 w-5 stroke-foreground stroke-[1.2]' />
          </button>

          <button className='h-fit w-fit rounded-xxs bg-[#E91E65] p-2' onClick={() => reset()}>
            <Clear className='h-5 w-5 fill-foreground stroke-[1.2]' />
          </button>
        </div>
      </form>
    </div>
  );
};
