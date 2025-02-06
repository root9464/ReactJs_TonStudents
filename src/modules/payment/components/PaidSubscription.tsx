import { ReactComponent as SubscribeMan } from '@/assets/svg/paidSubscriptionIcon.svg';
import { Button } from '@heroui/react';

import { ReactComponent as TelegramStar } from '@/assets/svg/tgStarIcon.svg';
import { useQueryClient } from '@tanstack/react-query';
import { invoice, useLaunchParams } from '@telegram-apps/sdk-react';
import { usePayment } from '../hooks/usePayment';

export const PaidSubscription = () => {
  const queryClient = useQueryClient();
  const { initData, initDataRaw } = useLaunchParams();
  const cachedAuthData: { accessToken: string; refreshToken: string } | undefined = queryClient.getQueryData(['auth', initDataRaw]);

  const { data: PaymentLink, mutate } = usePayment();

  const openInvoice = async (paymentUrl: string) => {
    console.log(paymentUrl);
    await invoice.open(paymentUrl, 'url');
  };

  return (
    <div className='relative grid h-fit w-full auto-rows-max gap-4 rounded-2xl bg-foreground p-3.5'>
      <div className='grid h-fit w-full grid-cols-2 gap-2'>
        <p className='place-self-center text-xs font-medium text-secondary-foreground'>
          Хотите начать зарабатывать? Станьте креатором контента и начните продавать свои услуги на нашей платформе...
        </p>
        <SubscribeMan className='fill-primary' />
      </div>
      {PaymentLink ? (
        <Button
          onPress={async () => await openInvoice(PaymentLink)}
          className='flex h-10 w-full items-center justify-between place-self-end rounded-xs bg-primary px-3 py-2 text-base font-medium text-white'>
          Оплатить
          <div className='flex flex-row items-center gap-2.5'>
            <p className='font-medium opacity-70'>500</p>
            <TelegramStar className='h-6 w-6 fill-foreground opacity-70' />
          </div>
        </Button>
      ) : (
        <Button
          onPress={() => mutate({ userId: initData?.user?.id ?? 0, accessToken: cachedAuthData?.accessToken ?? '' })}
          className='flex h-10 w-full items-center justify-between place-self-end rounded-xs bg-primary px-3 py-2 text-base font-medium text-white'>
          Сгенерировать
          <div className='flex flex-row items-center gap-2.5'>
            <p className='font-medium opacity-70'>500</p>
            <TelegramStar className='h-6 w-6 fill-foreground opacity-70' />
          </div>
        </Button>
      )}
    </div>
  );
};
