import { ReactComponent as Logo } from '@/assets/svg/tonIcon.svg';
import { hapticFeedback } from '@telegram-apps/sdk-react';
import { motion } from 'motion/react';

const shakeAnimation = {
  x: [0, 10, -10, 10, -10, 0],
  transition: {
    duration: 0.5,
    ease: 'easeInOut',
  },
};

export const Header = () => (
  <motion.header
    className='flex h-fit flex-row items-center justify-start gap-4'
    whileTap={shakeAnimation}
    onTap={() => hapticFeedback.notificationOccurred('success')}>
    <div className='flex flex-col'>
      <div className='flex flex-row items-center justify-between'>
        <h1 className='text-2xl font-semibold'>TonStudents</h1>
        <div className='rounded-xxs bg-slate-600/25 px-1.5 py-0.5 text-xxs font-medium'>beta</div>
      </div>
      <p className='text-xxs font-medium'>не парься из за зачетов — купи зачет</p>
    </div>
    <Logo className='h-8 w-8 fill-primary' />
  </motion.header>
);
