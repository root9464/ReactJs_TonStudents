import { Button } from '@/components/ui/button';
import { useBackButton } from '@/shared/hooks/useBackButton';
import { useTheme } from '@/shared/hooks/useTheme';
import { Link } from '@tanstack/react-router';

export default function MainPage() {
  useBackButton(false);

  const { setTheme } = useTheme();

  return (
    <>
      {/* <div className='safe-area-content fixed top-0 left-0 w-full'>fffff</div> */}
      <div className=''>
        <Button onClick={() => setTheme('dark')}>dark</Button>
        <Button onClick={() => setTheme('light')}>light</Button>
        <Link to='/test'>Test</Link>
      </div>
    </>
  );
}
