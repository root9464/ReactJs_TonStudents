import { ReactComponent as Wallet } from '@/assets/svg/walletIcon.svg';
import { Button } from '@heroui/react';
import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';

export const ConnectWalletButton = () => {
  const [tonConnectUI] = useTonConnectUI();
  const address = useTonAddress();
  return (
    <>
      {address ? (
        <Button
          className='flex h-10 w-full items-center justify-between place-self-end rounded-sm bg-primary px-3 py-2 text-base font-medium text-white'
          onPress={() => tonConnectUI.disconnect()}>
          <div className='flex flex-row items-center gap-2.5'>
            <Wallet className='h-6 w-6 stroke-foreground stroke-[1.2]' />
            <h3>Кошелек</h3>
          </div>
          <h4 className='font-medium opacity-70'>{address.slice(0, 4) + '...' + address.slice(-4)}</h4>
        </Button>
      ) : (
        <Button
          className='flex h-10 w-full items-center gap-2.5 place-self-end rounded-sm bg-primary px-3 py-2 text-base font-medium text-white'
          onPress={() => tonConnectUI.modal.open()}>
          <Wallet className='h-6 w-6 stroke-foreground stroke-[1.2]' />
          <h3>Подключить кошелек</h3>
        </Button>
      )}
    </>
  );
};
