import { ReactComponent as Notifications } from '@/assets/svg/notificationsIcon.svg';
import { ReactComponent as Save } from '@/assets/svg/saveIcon.svg';
import { ReactComponent as Clear } from '@/assets/svg/xIcon.svg';
import { ConnectWalletButton } from '../widgets/ConnetWalletButton';

import { ReactComponent as Basket } from '@/assets/svg/basketIcon.svg';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  userName: string;
  firstName: string;
} & InformationContainerProps;

export const ProfileCard: FC<Props> = ({ userName, firstName, title, description }) => (
  <div className='relative grid h-fit w-full auto-rows-max gap-4 rounded-5xl bg-foreground p-3.5'>
    <Header userName={userName} firstName={firstName} />

    <div className='grid w-full auto-rows-max gap-4'>
      {title && description ? <InformationContainer title={title} description={description} /> : <FormInformation />}
      <ButtonsContainer />
    </div>

    <ConnectWalletButton />
  </div>
);

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

const FormInformation = () => {
  const { formState, register, handleSubmit } = useForm<{ description: string }>({
    defaultValues: {
      description: '',
    },
    mode: 'onChange',
  });

  const onSubmit = ({ description }: { description: string }) => {
    console.log(description);
  };

  return (
    <div className='flex h-fit w-full flex-col gap-2'>
      <h2 className='text-xl font-medium text-muted opacity-60'>Нет информации</h2>

      <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-[1fr_auto] gap-2'>
        <div className='flex flex-col gap-1'>
          <textarea
            className={`h-28 w-full rounded-xs p-2.5 text-secondary-foreground outline-none ${
              formState.errors.description ? 'border-2 border-[#E91E65] bg-[#E91E65]/15' : 'bg-muted-secondary'
            }`}
            placeholder='Данное поле будет по умолчанию отображаться в профиле'
            {...register('description', {
              required: 'Это поле обязательно для заполнения',
              maxLength: {
                value: 500,
                message: 'Максимальная длина текста — 500 символов',
              },
            })}
          />

          {formState.errors.description && <span className='text-sm text-[#E91E65]'>{formState.errors.description.message}</span>}
        </div>

        <div className='flex h-full w-fit flex-col gap-1 justify-self-start'>
          <button type='submit' className='h-fit w-fit rounded-xxs bg-primary p-2 text-white'>
            <Save className='h-5 w-5 stroke-foreground stroke-[1.2]' />
          </button>

          <button type='reset' className='h-fit w-fit rounded-xxs bg-[#E91E65] p-2'>
            <Clear className='h-5 w-5 stroke-foreground stroke-[1.2]' />
          </button>
        </div>
      </form>
    </div>
  );
};
