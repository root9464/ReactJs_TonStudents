import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'motion/react';
import { FC } from 'react';

type Props = {
  id: number;
  title: string;
  description: string;
};

export const TabsInfo: FC<{ items: Props[] }> = ({ items }) => {
  return (
    <Tabs className='z-[1] w-full' defaultValue={items[0].title}>
      <TabsList className='h-10 rounded-md p-2'>
        {items.map(({ id, title }) => (
          <TabsTrigger key={id} value={title}>
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      {items.map(({ id, title, description }) => (
        <TabsContent key={id} value={title} className={`w-full rounded-md bg-foreground p-2`}>
          <motion.div
            className='text-secondary-foreground'
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: 'circOut',
              delayChildren: 0.2,
            }}>
            {description}
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
