import { ReactComponent as Notifications } from '@/assets/svg/notificationsIcon.svg';
import { useLaunchParams } from '@telegram-apps/sdk-react';
import { ConnectWalletButton } from '../widgets/ConnetWalletButton';

import { ReactComponent as Basket } from '@/assets/svg/basketIcon.svg';
export const ProfileCard = () => {
  const { initData } = useLaunchParams();
  console.log(initData);
  return (
    <div className='relative grid h-fit w-full auto-rows-max gap-4 rounded-5xl bg-foreground p-3.5'>
      <Header userName={initData?.user?.username ?? ''} firstName={initData?.user?.firstName ?? ''} />

      <div className='grid w-full auto-rows-max gap-4'>
        <InformationContainer />
        <ButtonsContainer />
      </div>

      <ConnectWalletButton />
    </div>
  );
};

const Header = ({ userName, firstName }: { userName: string; firstName: string }) => (
  <div className='flex h-fit w-full flex-row items-center justify-between'>
    <div className='flex flex-col gap-2'>
      <h2 className='text-lg font-medium'>@{userName}</h2>
      <h2 className='text-lg font-medium'>{firstName}</h2>
    </div>
    <div className='h-14 w-14 rounded-full bg-lime-300' />
  </div>
);

const InformationContainer = () => (
  <div className='flex h-fit w-full flex-col gap-2'>
    <h2 className='text-xl font-medium text-muted opacity-60'>Информация</h2>
    <p className='w-full break-all text-base font-medium'>
      ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff fffffffffffffffffffffffffffffff fffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffff
    </p>
  </div>
);

const ButtonsContainer = () => (
  <div className='flex h-fit w-full flex-row justify-start gap-1.5'>
    <div className='bg-muted-secondary rounded-xxs flex h-fit w-fit flex-row items-center gap-1 p-1.5 text-secondary-foreground'>
      <Notifications className='h-fit w-fit stroke-secondary-foreground stroke-[1.2] opacity-60' />
      <p className='opacity-60'>5</p>
    </div>
    <div className='bg-muted-secondary rounded-xxs flex h-fit w-fit flex-row items-center gap-1 p-1.5 text-secondary-foreground'>
      <Basket className='h-fit w-full stroke-secondary-foreground stroke-[1.2] opacity-60' />
      <p className='opacity-60'>Заказы</p>
    </div>
  </div>
);
