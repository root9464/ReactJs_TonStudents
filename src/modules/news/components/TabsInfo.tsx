import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

const TABS_CONTENT = ['О нас', 'Наши преимущества', 'Контакты'];

export const TabsInfo = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab((prevTab) => (prevTab === tab ? null : tab));
  };

  return (
    <Tabs className='w-max'>
      <TabsList className='h-10 rounded-md p-2'>
        {TABS_CONTENT.map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            onClick={() => handleTabClick(tab)}
            aria-selected={activeTab === tab}
            data-state={activeTab === tab ? 'active' : 'inactive'}>
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>

      {TABS_CONTENT.map(
        (tab) =>
          activeTab === tab && (
            <TabsContent key={tab} data-state={activeTab === tab ? 'active' : 'inactive'} className={`w-full rounded-md bg-foreground p-2`}>
              {tab}
            </TabsContent>
          ),
      )}
    </Tabs>
  );
};
