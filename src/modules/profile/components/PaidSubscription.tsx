import { ReactComponent as SubscribeMan } from '@/assets/svg/paidSubscriptionIcon.svg';
import { Button } from '@heroui/react';

import { ReactComponent as TelegramStar } from '@/assets/svg/tgStarIcon.svg';

export const PaidSubscription = () => {
  return (
    <div className='relative grid h-fit w-full auto-rows-max gap-4 rounded-5xl bg-foreground p-3.5'>
      <div className='grid h-fit w-full grid-cols-2 gap-2'>
        <p className='place-self-center text-xs'>
          Хотите начать зарабатывать? Станьте креатором контента и начните продавать свои услуги на нашей платформе...
        </p>
        <SubscribeMan className='fill-primary' />
      </div>
      <Button className='rounded-xs flex h-10 w-full items-center justify-between place-self-end bg-primary px-3 py-2 text-base font-medium text-white'>
        Сгенерировать
        <div className='flex flex-row items-center gap-2.5'>
          <p className='font-medium opacity-70'>500</p>
          <TelegramStar className='h-6 w-6 fill-foreground opacity-70' />
        </div>
      </Button>
    </div>
  );
};
