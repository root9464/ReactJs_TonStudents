import { ReactComponent as LinkIco } from '@/assets/svg/linkIcon.svg';
import { ReactComponent as TonCoin } from '@/assets/svg/tonCoinPath.svg';

import { Button, Card, CardBody, Tab, Tabs } from '@heroui/react';
import { Link, useLocation } from '@tanstack/react-router';
import { FC, ReactNode } from 'react';
import { ServiceType } from '../hooks/useService';

export const ServiceCard: FC<{ items: ServiceType[] }> = ({ items }) => {
  const { pathname } = useLocation();
  return (
    <>
      {items.map(({ id, username, infos }, index) => (
        <div className='flex h-max w-full flex-col gap-2.5 rounded-2xl bg-foreground p-3.5' key={index}>
          <ServiceContent>
            <ServiceHeader>{username}</ServiceHeader>
            {infos.length > 1 ? (
              <ServiceTabs tabs={infos} />
            ) : (
              <div className='h-fit rounded-xxs bg-foreground p-3 text-secondary-foreground'>
                <p>{infos[0].content}</p>
              </div>
            )}

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

            {pathname !== `/store/${id}` && (
              <Button as={Link} to={`/store/${id}`} className='h-fit w-fit rounded-xxs bg-primary p-2 text-primary-foreground'>
                Связаться
                <LinkIco className='h-5 w-5 fill-white stroke-[1.2] opacity-70' />
              </Button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

const ServiceHeader: FC<{ children: ReactNode }> = ({ children }) => (
  <div className='flex h-max w-full flex-row items-center justify-between'>
    <p className='text-xl font-medium text-primary'>{children}</p>
  </div>
);

const ServiceContent: FC<{ children: ReactNode }> = ({ children }) => (
  <div className='grid h-max w-full auto-rows-max grid-rows-[auto_1fr] gap-2.5 rounded-xxs bg-primary-20 p-2 text-primary'>{children}</div>
);

type TabProps = {
  title: string;
  content: string;
};

const ServiceTabs = ({ tabs }: { tabs: TabProps[] }) => (
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
    {tabs.map((tab) => (
      <Tab key={tab.title} title={tab.title}>
        <Card className='shadow-none'>
          <CardBody className='bg-foreground text-secondary-foreground'>{tab.content}</CardBody>
        </Card>
      </Tab>
    ))}
  </Tabs>
);

const ServiceTags = () => (
  <div className='flex h-max w-full flex-row items-center justify-between'>
    <p className='text-muted'>#fff</p>
  </div>
);
