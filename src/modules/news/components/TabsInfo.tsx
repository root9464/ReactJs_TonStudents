import { Card, CardBody, Tab, Tabs } from '@heroui/react';
import { FC } from 'react';

type Props = {
  id: number;
  title: string;
  description: string;
};

export const TabsInfo: FC<{ items: Props[] }> = ({ items }) => {
  return (
    <div className='z-[1] flex w-full flex-col'>
      <Tabs
        aria-label='Options'
        classNames={{
          base: 'h-fit',
          cursor: 'bg-primary rounded-[10px]',
          panel: 'mt-3 p-0 shadow-none border-none',
          tabList: 'bg-foreground rounded-xxs',
          tab: 'w-full rounded-xxs',
          tabContent: 'group-data-[selected=true]:text-primary-foreground group-data-[selected=false]:text-secondary-foreground',
        }}>
        {items.map((item) => (
          <Tab key={item.id} title={item.title} className='w-full rounded-xxs'>
            <Card className='shadow-none'>
              <CardBody className='w-full px-3.5 py-2 text-secondary-foreground'>
                <p>{item.description}</p>
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};
