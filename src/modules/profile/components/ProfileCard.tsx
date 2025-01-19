import { useLaunchParams } from '@telegram-apps/sdk-react';

export const ProfileCard = () => {
  const { initData } = useLaunchParams();

  console.log(initData);

  return (
    <div className='h-fit w-full rounded-5xl bg-foreground p-3.5'>
      <div className='flex h-fit w-full flex-row items-center justify-between'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg font-medium'>@{initData?.user?.username}</h2>
          <h2 className='text-lg font-medium'>{initData?.user?.firstName}</h2>
        </div>
        <img src={initData?.user?.photoUrl} alt='avatar' />
      </div>
    </div>
  );
};
