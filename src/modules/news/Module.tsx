import { ModuleFlow } from '@/components/layouts/ModuleFlow';
import { motion } from 'motion/react';
import { AccordionInfo } from './components/AccorsionInfo';
import { TabsInfo } from './components/TabsInfo';
import { NEWS_POSTS } from './mock/mock';

export const NewsModule = () => {
  return (
    <ModuleFlow className='h-screen'>
      <TabsInfo items={NEWS_POSTS} />
      <AccordionInfo />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        className='absolute bottom-[250px] right-0 h-[240px] w-[240px] rounded-full bg-primary opacity-35 blur-[55px] backdrop-blur'
      />
    </ModuleFlow>
  );
};
