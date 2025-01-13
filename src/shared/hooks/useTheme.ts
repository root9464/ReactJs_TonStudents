import { ThemeProviderContext } from '@/components/GlobalProvider';
import { useContext } from 'react';

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a CombinedProvider');
  }

  return context;
};
