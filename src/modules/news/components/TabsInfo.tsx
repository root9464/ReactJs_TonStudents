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
          tabList: 'rounded-md bg-foreground',
          panel: 'mt-2 p-0 shadow-none border-none',
          cursor: 'bg-primary rounded-md',
          tabContent: 'group-data-[selected=true]:text-foreground group-data-[selected=false]:text-secondary-foreground rounded-md ',
        }}>
        {items.map((item) => (
          <Tab key={item.id} title={item.title} className='w-full rounded-md'>
            <Card className='shadow-none'>
              <CardBody className='w-full px-4 py-2 text-secondary-foreground'>
                <p>{item.description}</p>
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};
