import { useTheme } from '@/shared/hooks/useTheme';
import { Button } from '../components/ui/button';

export default function MainPage() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <h1 className='bg-red-500 '>ThemeProvider</h1>
      <Test theme={theme} setTheme={setTheme} />
    </>
  );
}

const Test = ({ theme, setTheme }: { theme: string; setTheme: (theme: 'dark' | 'light' | 'system') => void }) => (
  <>
    <p>{theme}</p>
    <Button variant={'ghost'} onClick={() => setTheme('light')}>
      Light
    </Button>
    <Button onClick={() => setTheme('dark')}>Dark</Button>
  </>
);
