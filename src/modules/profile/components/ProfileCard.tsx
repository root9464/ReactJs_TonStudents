import { useLaunchParams } from '@telegram-apps/sdk-react';
import { ConnectWalletButton } from '../widgets/ConnetWalletButton';

export const ProfileCard = () => {
  const { initData } = useLaunchParams();
  console.log(initData);

  return (
    <div className='grid h-fit w-full grid-rows-3 gap-4 rounded-5xl bg-foreground p-3.5' id='profile-card'>
      <div className='flex h-fit w-full flex-row items-center justify-between'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg font-medium'>@{initData?.user?.username}</h2>
          <h2 className='text-lg font-medium'>{initData?.user?.firstName}</h2>
        </div>
        <div className='h-14 w-14 rounded-full bg-lime-300' />
      </div>

      <div className='flex h-fit w-full flex-col gap-2'>
        <h2 className='text-xl font-medium text-primary opacity-25'>Информация</h2>
        <p className='text-base font-medium'>fffffffffffffffffffffffffffff</p>
      </div>

      <ConnectWalletButton />
    </div>
  );
};
