import { ReactComponent as Link } from '@/assets/svg/linkIcon.svg';
import { ReactComponent as TonCoin } from '@/assets/svg/tonCoinPath.svg';

import { Button, Card, CardBody, Tab, Tabs } from '@heroui/react';
import { FC, ReactNode } from 'react';
export const ServiceCard = () => {
  return (
    <div className='flex h-max w-full flex-col gap-2.5 rounded-2xl bg-foreground p-3.5'>
      <ServiceContent>
        <ServiceHeader />
        <ServiceTabs />
        <ServiceTags />
      </ServiceContent>
      <div className='grid h-max w-full grid-cols-[auto_1fr_auto] gap-2'>
        <Button className='h-fit w-fit rounded-xxs bg-primary p-2 text-primary-foreground'>
          Заказать
          <div className='flex flex-row opacity-70'>
            <p>0.5</p>
            <TonCoin className='h-5 w-5 fill-white' />
          </div>
        </Button>
        <Button className='h-fit w-fit rounded-xxs bg-primary p-2 text-primary-foreground'>
          Подробнее
          <Link className='h-5 w-5 fill-white stroke-[1.2] opacity-70' />
        </Button>
      </div>
    </div>
  );
};

const ServiceHeader = () => (
  <div className='flex h-max w-full flex-row items-center justify-between'>
    <p className='text-xl font-medium text-primary'>@rootton_dev</p>
  </div>
);

const ServiceContent: FC<{ children: ReactNode }> = ({ children }) => (
  <div className='bg-primary-20 grid h-max w-full auto-rows-max grid-rows-[auto_1fr] gap-2.5 rounded-xxs p-2 text-primary'>{children}</div>
);

const ServiceTabs = () => (
  <Tabs
    aria-label='Options'
    classNames={{
      base: 'h-fit',
      cursor: 'bg-primary rounded-[10px]',
      panel: 'mt-0 p-0 shadow-none border-none',
      tabList: 'bg-foreground rounded-xxs',
      tab: 'w-full rounded-xxs',
      tabContent: 'group-data-[selected=true]:text-primary-foreground group-data-[selected=false]:text-secondary-foreground',
    }}>
    <Tab key='photos' title='Photos'>
      <Card className='shadow-none'>
        <CardBody className='bg-foreground text-secondary-foreground'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </CardBody>
      </Card>
    </Tab>
    <Tab key='key2' title='key2'>
      <Card className='shadow-none'>
        <CardBody className='bg-foreground text-secondary-foreground'>fffffffff</CardBody>
      </Card>
    </Tab>
  </Tabs>
);

const ServiceTags = () => (
  <div className='flex h-max w-full flex-row items-center justify-between'>
    <p className='text-muted'>#fff</p>
  </div>
);
