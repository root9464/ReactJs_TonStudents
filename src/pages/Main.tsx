import { Button } from '@/components/ui/button';
import { useBackButton } from '@/shared/hooks/useBackButton';
import { useTheme } from '@/shared/hooks/useTheme';
import { Link } from '@tanstack/react-router';

export default function MainPage() {
  useBackButton(false);

  const { setTheme } = useTheme();

  return (
    <div>
      <Button onClick={() => setTheme('dark')}>dark</Button>
      <Button onClick={() => setTheme('light')}>light</Button>
      <Link to='/test'>Test</Link>
    </div>
  );
}
