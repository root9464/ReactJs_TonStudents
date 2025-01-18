import { ReactComponent as Logo } from '@/assets/svg/tonIcon.svg';

export const Header = () => (
  <header className='flex h-fit flex-row items-center justify-start gap-4'>
    <div className='flex flex-col'>
      <h1 className='text-2xl font-semibold'>TonStudents</h1>
      <p className='text-xxs font-medium'>не парься из за зачетов — купи зачет</p>
    </div>
    <Logo className='h-8 w-8 fill-primary' />
  </header>
);
