import { ReactComponent as Notifications } from '@/assets/svg/notificationsIcon.svg';
import { ReactComponent as Save } from '@/assets/svg/saveIcon.svg';
import { ReactComponent as Clear } from '@/assets/svg/xIcon.svg';
import { ConnectWalletButton } from '../widgets/ConnetWalletButton';

import { ReactComponent as Basket } from '@/assets/svg/basketIcon.svg';
import { Alert } from '@heroui/react';
import { initDataRaw, initDataUser } from '@telegram-apps/sdk-react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useAddInfo } from '../hooks/useAddInfo';
import { useAuth } from '../hooks/useAuth';
import { ProfileSkeleton } from './skeletons/ProfileSkeleton';

export const ProfileCard = () => {
  const dataRaw = initDataRaw();
  const { data, isSuccess, isLoading, isError, refetch } = useAuth(dataRaw ?? '');

  return (
    <>
      {isSuccess && data && (
        <div className='relative grid h-fit w-full auto-rows-max gap-4 rounded-5xl bg-foreground p-3.5'>
          <Header userName={data.user.username} firstName={data.user.username} />

          <div className='grid w-full auto-rows-max gap-4'>
            {data?.user.infos && data.user.infos.length > 0 && isSuccess ? (
              <InformationContainer title={data.user.infos?.[0]?.title} description={data.user.infos?.[0]?.content} />
            ) : (
              <FormInformation refetch={refetch} />
            )}
            <ButtonsContainer />
          </div>

          <ConnectWalletButton />
        </div>
      )}

      {isLoading && <ProfileSkeleton />}
      {isError && <Alert description={'Error'} title='dont know' color='warning' />}
    </>
  );
};

const Header: FC<{ userName: string; firstName: string }> = ({ userName, firstName }) => (
  <div className='flex h-fit w-full flex-row items-center justify-between'>
    <div className='flex flex-col gap-2'>
      <h2 className='text-lg font-medium'>@{userName}</h2>
      <h2 className='text-lg font-medium'>{firstName}</h2>
    </div>
    <div className='h-14 w-14 rounded-full bg-lime-300' />
  </div>
);

type InformationContainerProps = {
  title: string;
  description: string;
};

const InformationContainer: FC<InformationContainerProps> = ({ title, description }) => (
  <div className='flex h-fit w-full flex-col gap-2'>
    <h2 className='text-xl font-medium text-muted opacity-60'>{title}</h2>
    <p className='w-full break-all text-base font-medium'>{description}</p>
  </div>
);

const ButtonsContainer = () => (
  <div className='flex h-fit w-full flex-row justify-start gap-1.5'>
    <div className='flex h-fit w-fit flex-row items-center gap-1 rounded-xxs bg-muted-secondary p-1.5 text-secondary-foreground'>
      <Notifications className='h-fit w-fit stroke-secondary-foreground stroke-[1.2] opacity-60' />
      <p className='opacity-60'>5</p>
    </div>
    <div className='flex h-fit w-fit flex-row items-center gap-1 rounded-xxs bg-muted-secondary p-1.5 text-secondary-foreground'>
      <Basket className='h-fit w-full stroke-secondary-foreground stroke-[1.2] opacity-60' />
      <p className='opacity-60'>Заказы</p>
    </div>
  </div>
);

type FormInformation = {
  title: string;
  content: string;
};

const FormInformation = ({ refetch }: { refetch: () => void }) => {
  const { formState, register, handleSubmit, reset } = useForm<FormInformation>({
    defaultValues: {
      title: '',
      content: '',
    },
    mode: 'onChange',
  });
  const { mutate } = useAddInfo(refetch);
  const UserInitData = initDataUser();

  const onSubmit = ({ title, content }: FormInformation) => {
    if (UserInitData) mutate({ userId: UserInitData.id, title, content });
  };

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
            className={`h-28 w-full rounded-xs p-2.5 text-secondary-foreground outline-none ${
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
            <Clear className='h-5 w-5 stroke-foreground stroke-[1.2]' />
          </button>
        </div>
      </form>
    </div>
  );
};
