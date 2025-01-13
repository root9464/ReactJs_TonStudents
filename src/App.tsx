import { Button } from './components/ui/button';
import { useTheme } from './ThemeProvider';

export default function App() {
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
    <Button
      onClick={() => {
        setTheme('light');
        console.log(theme);
      }}>
      Light
    </Button>
    <Button onClick={() => setTheme('dark')}>Dark</Button>
  </>
);
